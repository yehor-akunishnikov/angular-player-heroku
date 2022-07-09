import {createReducer, on} from "@ngrx/store";

import {setSrc} from "../actions";
import {PlayerState} from "../../../models";

export type State = PlayerState;

export const initialState: State = {
  src: null,
};

export const reducer = createReducer(
  initialState,
  on(setSrc, (state, {src}) => {
    return {...state, src};
  }),
);
