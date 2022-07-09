import {Injectable} from '@angular/core';

import {createEffect} from '@ngrx/effects';

import {map} from "rxjs";

import {setRole} from "../actions";
import {UsersWsService} from "../../../../../ws/users/service/users-ws.service";

@Injectable()
export class UsersWsEffects {
  constructor(
    private ws: UsersWsService,
  ) {}

  setRole$ = createEffect(() => this.ws.setRole$.pipe(
    map((role: any) => setRole({role})),
  ));
}
