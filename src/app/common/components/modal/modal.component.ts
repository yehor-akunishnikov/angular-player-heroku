import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {Observable} from "rxjs";

import {ModalService} from "../../service/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() public defaultState: boolean = false;

  public display$: Observable<boolean | null> = new Observable();
  public id: string = '';

  constructor(
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    this.id = this.modalService.addModal(this.defaultState);
    this.display$ = this.modalService.watch(this.id);
  }

  ngOnDestroy() {
    this.modalService.removeModal(this.id);
  }

  close() {
    this.modalService.close(this.id);
  }

  open() {
    this.modalService.open(this.id);
  }
}
