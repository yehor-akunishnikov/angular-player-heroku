import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UsersWsService} from "./service/users-ws.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [UsersWsService],
})
export class UsersWsModule { }
