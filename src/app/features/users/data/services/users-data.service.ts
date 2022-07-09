import { Injectable } from '@angular/core';
import {select, Store} from "@ngrx/store";

import {RoleSelector} from "../store/store";

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  public role$ = this.store.pipe(select(RoleSelector));

  constructor(
    private store: Store,
  ) { }
}
