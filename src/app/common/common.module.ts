import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {ModalComponent} from "./components/modal/modal.component";
import {ModalHeaderComponent} from "./components/modal/partials/modal-header/modal-header.component";
import {ModalFooterComponent} from "./components/modal/partials/modal-footer/modal-footer.component";
import {ModalBodyComponent} from "./components/modal/partials/modal-body/modal-body.component";
import {ModalService} from "./service/modal.service";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    ModalBodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    ModalBodyComponent,
  ],
  providers: [ModalService],
})
export class AppCommonModule { }
