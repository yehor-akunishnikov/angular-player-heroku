import {createAction, props} from "@ngrx/store";
import {PlayerState} from "../../../models";

export const togglePlay = createAction(
  '[Player] Toggle Play',
  props<{toggleTo: boolean}>()
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
