import {createAction, props} from "@ngrx/store";
import {PlayerState} from "../../../models";

export const play = createAction(
  '[Player] Play',
);

export const pause = createAction(
  '[Player] Pause',
);

export const setPlayingState = createAction(
  '[Player] Set Playing State',
  props<{playingState: boolean}>()
);

export const resetPlayer = createAction(
  '[Player] Reset Player',
);

export const patchPlayer = createAction(
  '[Player] Patch Player',
  props<{playerState: Partial<PlayerState>}>()
);

export const setTime = createAction(
  '[Player] Set Time',
  props<{setTo: number}>()
);

export const setSrc = createAction(
  '[Player] Set Src',
  props<{src: string | null}>()
);
