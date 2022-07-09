import {Component} from '@angular/core';

import {Socket} from "ngx-socket-io";
import {ModalComponent} from "../../common/components/modal/modal.component";
import {AudioControlService} from "../../features/player/services/audio-control.service";

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss'],
})
export class PlayerPageComponent {
  public src = null;
  public modalType: 'default' | 'src' = 'default';
  public src$ = this.audioControlService.src$;

  constructor(
    private socket: Socket,
    private audioControlService: AudioControlService,
  ) {
  }

  public saveModal(modal: ModalComponent) {
    if(this.modalType === 'default') {
      this.socket.emit('enteredPlayer');
      modal.close();
    } else {
      this.socket.emit('setSrc', this.src);
      this.src = null;
      modal.close();
    }
  }

  public openModal(modal: ModalComponent, type: 'default' | 'src') {
    this.modalType = type;
    modal.open();
  }
}
