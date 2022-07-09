import {Injectable} from '@angular/core';

import {createEffect} from '@ngrx/effects';

import {map, withLatestFrom} from "rxjs";

import {setSrc, setTime, togglePlay} from "../actions";
import {PlayerWsService} from "../../../../../ws/player/service/player-ws.service";
import {Socket} from "ngx-socket-io";
import {AudioControlService} from "../../../services/audio-control.service";

@Injectable()
export class PlayerWsEffects {
  constructor(
    private ws: PlayerWsService,
    private socket: Socket,
    private audioControlService: AudioControlService,
  ) {}

  play$ = createEffect(() => this.ws.play$.pipe(
    map(() => togglePlay({toggleTo: true})),
  ));

  pause$ = createEffect(() => this.ws.pause$.pipe(
    map(() => togglePlay({toggleTo: false})),
  ));

  sync$ = createEffect(() => this.ws.sync$.pipe(
    map((time: any) => setTime({setTo: time})),
  ));

  seek$ = createEffect(() => this.ws.seek$.pipe(
    map((time: any) => setTime({setTo: time})),
  ));

  setSrc$ = createEffect(() => this.ws.setSrc$.pipe(
    map((src: any) => setSrc({src})),
  ));

  getUrl$ = createEffect(() => this.ws.getUrl$.pipe(
    withLatestFrom(
      this.audioControlService.src$,
    ),
    map(([id, src = null]) => this.socket.emit('giveUrl', {id, url: src})),
  ));
}
