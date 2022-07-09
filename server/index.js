const express = require('express');
const app = express();
app.use(express.static(__dirname + '/../dist'));
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const {push} = require("karma/lib/init/log-queue");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});
const users = {};

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

io.on('connection', (socket) => {
  socket.join('lobby');

  socket.on('enteredPlayer', () => {
    socket.leave('lobby');
    socket.join('player');
    users[socket.id] = {};

    if (Array.from(io.sockets.sockets.keys()).length === 1) {
      socket.emit('setRole', 'admin');
      users[socket.id].role = 'admin';
    } else {
      socket.emit('setRole', 'default');
      users[socket.id].role = 'default';
    }
  });

  socket.on('play', () => {
    io.to('player').emit('play');
  });

  socket.on('pause', () => {
    io.to('player').emit('pause');
  });

  socket.on('sync', (payload) => {
    io.to('player').emit('sync', payload);
  });

  socket.on('seek', (payload) => {
    io.to('player').emit('seek', payload);
  });

  socket.on('disconnect', () => {
    const role = users[socket.id]?.role;
    delete users[socket.id];
    const usersList = Object.keys(users);

    if (role !== 'admin' || !usersList.length) {
      return null;
    }

    io.sockets.sockets.get(usersList[0]).emit('setRole', 'admin');
  });
});

server.listen(8999, () => {
  console.log('listening on *:8999');
});
