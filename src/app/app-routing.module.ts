import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PlayerPageComponent} from "./pages/player-page/player-page.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'player', component: PlayerPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
