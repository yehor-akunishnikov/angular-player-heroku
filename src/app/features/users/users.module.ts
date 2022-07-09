import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StoreModule} from "@ngrx/store";

import {featureKey, featureReducer} from "./data/store/store";

import {EffectsModule} from "@ngrx/effects";
import {UsersWsEffects} from "./data/store/effects/users-ws.effects";
import {UsersDataService} from "./data/services/users-data.service";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(featureKey, featureReducer),
    EffectsModule.forFeature([
      UsersWsEffects,
    ]),
  ],
  providers: [UsersDataService],
})
export class UsersModule { }
