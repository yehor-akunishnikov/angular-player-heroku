import {Injectable} from '@angular/core';

import {createEffect} from '@ngrx/effects';

import {map} from "rxjs";

import {setTime, togglePlay} from "../actions";
import {PlayerWsService} from "../../../../../ws/player/service/player-ws.service";

@Injectable()
export class PlayerWsEffects {
  constructor(
    private ws: PlayerWsService,
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
}
