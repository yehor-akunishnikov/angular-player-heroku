import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-body',
  template: `<div class="modal-body">
    <ng-content></ng-content>
  </div>`,
})
export class ModalBodyComponent {
}
