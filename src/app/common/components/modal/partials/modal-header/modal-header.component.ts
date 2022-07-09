import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  template:  `<div class="modal-header">
    <ng-content></ng-content>
  </div>`,
})
export class ModalHeaderComponent {
}
