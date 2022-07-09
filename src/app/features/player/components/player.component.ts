import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';

import {AudioControlService, defaultState, StreamState} from "../services/audio-control.service";
import {Observable, of, Subscription} from "rxjs";
import {Socket} from "ngx-socket-io";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent implements OnInit, OnDestroy, OnChanges {
  @Input() src: string | null = null;
  @Output() srcModalOpen: EventEmitter<undefined> = new EventEmitter(undefined);

  public state$: Observable<StreamState> = this.audioControlService.getState();
  public isLoading$: Observable<boolean> = of(false);

  private seekTime = 15;
  private subscriptions = new Subscription();

  constructor(
    private audioControlService: AudioControlService,
    private socket: Socket,
  ) {}

  ngOnInit() {
    if (!this.src) {
      console.warn('Src property is not provided');
    } else {
      this.subscriptions.add(this.audioControlService.startStream(this.src).subscribe(events => {}));
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['src'] && this.src) {
      this.changeFile(this.src);
    }
  }

  ngOnDestroy() {
    this.audioControlService.killAudio();
    this.subscriptions.unsubscribe();
  }

  public changeFile(url: string) {
    this.audioControlService.stop();
    this.audioControlService.startStream(url).subscribe(events => {});
  }

  public pause(): void {
    this.socket.emit('pause');
  }

  public play(): void {
    this.socket.emit('play');
  }

  public seek(currentTime: number, direction: number, overwriteSeekTime?: number): void {
    const seekTime = overwriteSeekTime ?? this.seekTime;
    this.socket.emit('seek', Math.floor((currentTime || 0) + seekTime * direction));
  }

  public openSrcModal(): void {
    this.srcModalOpen.emit();
  }
}
