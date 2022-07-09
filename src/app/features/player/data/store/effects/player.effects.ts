import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';

import {tap} from "rxjs";

import {setTime, togglePlay} from "../actions";
import {AudioControlService} from "../../../services/audio-control.service";

@Injectable()
export class PlayerEffects {
  constructor(
    private actions$: Actions,
    private audioControlService: AudioControlService,
  ) {}

  togglePlay$ = createEffect(() => this.actions$.pipe(
    ofType(togglePlay),
    tap(({toggleTo}) => {
      if (toggleTo) {
        this.audioControlService.play();
      } else {
        this.audioControlService.pause();
      }
    }),
  ), ({dispatch: false}));

  setTime$ = createEffect(() => this.actions$.pipe(
    ofType(setTime),
    tap(({setTo}) => {
      this.audioControlService.seekTo(setTo);
    }),
  ), ({dispatch: false}));
}
