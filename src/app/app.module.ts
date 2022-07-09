import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {StoreModule} from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";

import {AppComponent} from './app.component';
import {PlayerPageComponent} from './pages/player-page/player-page.component';
import {HomeComponent} from './pages/home/home.component';

import {PlayerModule} from "./features/player/player.module";
import {AppRoutingModule} from './app-routing.module';
import {ModalService} from "./common/service/modal.service";
import {AppCommonModule} from "./common/common.module";
import {UsersModule} from "./features/users/users.module";
import {FormsModule} from "@angular/forms";

const socketConfig: SocketIoConfig = { url: 'http://localhost:8999', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    PlayerPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PlayerModule,
    UsersModule,
    AppCommonModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    SocketIoModule.forRoot(socketConfig),
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
