import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';

import {tap} from "rxjs";

import {setTime, play, pause} from "../actions";
import {AudioControlService} from "../../../services/audio-control.service";

@Injectable()
export class PlayerEffects {
  constructor(
    private actions$: Actions,
    private audioControlService: AudioControlService,
  ) {}

  play$ = createEffect(() => this.actions$.pipe(
    ofType(play),
    tap(() => {
      this.audioControlService.play();
    }),
  ), ({dispatch: false}));

  pause$ = createEffect(() => this.actions$.pipe(
    ofType(pause),
    tap(() => {
      this.audioControlService.pause();
    }),
  ), ({dispatch: false}));

  setTime$ = createEffect(() => this.actions$.pipe(
    ofType(setTime),
    tap(({setTo}) => {
      this.audioControlService.seekTo(setTo);
    }),
  ), ({dispatch: false}));
}
