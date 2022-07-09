import {createReducer, on} from "@ngrx/store";

import {patchPlayer, resetPlayer, setPlayingState} from "../actions";
import {PlayerState} from "../../../models";

export type State = PlayerState;

export const initialState: State = {
  duration: '00:00:00',
  isReadyToPlay: false,
  isPlaying: false,
  source: null,
};

export const reducer = createReducer(
  initialState,
  on(setPlayingState, (state, {playingState}) => {
    return {...state, isPlaying: playingState};
  }),
  on(resetPlayer, () => {
    return initialState;
  }),
  on(patchPlayer, (state, {playerState}) => {
    return {...state, ...playerState};
  }),
);
