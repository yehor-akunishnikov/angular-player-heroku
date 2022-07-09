import { Injectable } from '@angular/core';
import {Socket} from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class UsersWsService {
  constructor(private socket: Socket) {}

  public setRole$ = this.socket.fromEvent('setRole');
}
