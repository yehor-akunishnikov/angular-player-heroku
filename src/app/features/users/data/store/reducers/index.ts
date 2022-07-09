import {createReducer, on} from "@ngrx/store";

import { v4 as uuidv4 } from 'uuid';

import {setRole} from "../actions";
import {User} from "../../../models";

export type State = User;

export const initialState: State = {
  role: null,
  name: uuidv4(),
};

export const reducer = createReducer(
  initialState,
  on(setRole, (state, {role}) => {
    return {...state, role: role};
  }),
);
