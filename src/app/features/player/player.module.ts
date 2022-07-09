import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StoreModule} from "@ngrx/store";

import {featureKey, featureReducer} from "./data/store/store";

import {PlayerComponent} from "./components/player.component";
import {TimelineComponent} from "./components/timeline/timeline.component";
import {AudioControlService} from "./services/audio-control.service";
import {EffectsModule} from "@ngrx/effects";
import {PlayerEffects} from "./data/store/effects/player.effects";
import {PlayerWsEffects} from "./data/store/effects/player-ws.effects";

@NgModule({
  declarations: [
    PlayerComponent,
    TimelineComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureKey, featureReducer),
    EffectsModule.forFeature([
      PlayerEffects,
      PlayerWsEffects,
    ]),
  ],
  exports: [
    PlayerComponent,
    TimelineComponent,
  ],
  providers: [
    AudioControlService,
  ]
})
export class PlayerModule { }
