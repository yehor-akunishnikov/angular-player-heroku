import {createAction, props} from "@ngrx/store";

import {UserRoles} from "../../../models";

export const setRole = createAction(
  '[Users] Set Role',
  props<{role: UserRoles}>()
);
