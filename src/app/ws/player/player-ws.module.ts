import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayerWsService} from "./service/player-ws.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [PlayerWsService],
})
export class PlayerWsModule { }
