import {Component, OnInit} from '@angular/core';

import {UsersDataService} from "../../features/users/data/services/users-data.service";
import {Socket} from "ngx-socket-io";
import {ModalComponent} from "../../common/components/modal/modal.component";

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
  public src = null;
  public role$ = this.users.role$;
  public modalType: 'default' | 'src' = 'default';

  constructor(
    private users: UsersDataService,
    private socket: Socket,
  ) {
  }

  ngOnInit() {
    this.users.role$.subscribe(console.log);
  }

  public saveModal(modal: ModalComponent) {
    if(this.modalType === 'default') {
      this.socket.emit('enteredPlayer');
      modal.close();
    } else {
      modal.close();
    }
  }

  public openModal(modal: ModalComponent, type: 'default' | 'src') {
    this.modalType = type;
    modal.open();
  }
}
