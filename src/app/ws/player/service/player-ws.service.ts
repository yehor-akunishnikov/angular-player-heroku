import { Injectable } from '@angular/core';
import {Socket} from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class PlayerWsService {
  constructor(private socket: Socket) {}

  public play$ = this.socket.fromEvent('play');
  public pause$ = this.socket.fromEvent('pause');
  public sync$ = this.socket.fromEvent('sync');
  public seek$ = this.socket.fromEvent('seek');
  public admin$ = this.socket.fromEvent('admin');
  public setSrc$ = this.socket.fromEvent('setSrc');
  public getUrl$ = this.socket.fromEvent('getUrl');
}
