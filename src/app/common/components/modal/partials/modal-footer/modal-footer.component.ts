import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-footer',
  template: `<div class="modal-footer">
    <ng-content></ng-content>
  </div>`,
})
export class ModalFooterComponent {
}
