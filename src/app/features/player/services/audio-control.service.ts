import {BehaviorSubject, Observable, Subject, takeUntil} from "rxjs";

import * as moment from 'moment';
import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {srcSelector} from "../data/store/store";

const events = [
  'ended', 'error', 'play', 'playing', 'pause', 'timeupdate', 'canplay', 'loadedmetadata', '`loadstart`'
];

export interface StreamState {
  playing: boolean;
  readableCurrentTime: string;
  readableDuration: string;
  duration: number;
  currentTime: number;
  canplay: boolean;
  error: boolean;
}

export const defaultState = {
  playing: false,
  readableCurrentTime: '00:00:00',
  readableDuration: '00:00:00',
  duration: 0,
  currentTime: 0,
  canplay: false,
  error: false
};

@Injectable({
  providedIn: 'root',
})
export class AudioControlService {
  private stop$ = new Subject();
  private audioObj = new Audio();
  private state: StreamState = defaultState;
  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(this.state);
  public src$ = this.store.pipe(select(srcSelector));

  constructor(
    private store: Store,
  ) {
  }

  private streamObservable(url: string): Observable<Event> {
    return new Observable(observer => {
      this.audioObj.src = url;
      this.audioObj.load();

      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };

      this.addEvents(this.audioObj, events, handler);
      return () => {
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        this.removeEvents(this.audioObj, events, handler);
        this.resetState();
      };
    });
  }

  private addEvents(obj: HTMLAudioElement, events: string[], handler: EventListener): void {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(obj: HTMLAudioElement, events: string[], handler: EventListener): void {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }

  public startStream(url: string): Observable<Event> {
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  public formatTime(time: number, format: string = 'HH:mm:ss'): string {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case 'canplay':
        this.state.duration = this.audioObj.duration;
        this.state.readableDuration = this.formatTime(this.state.duration);
        this.state.canplay = true;
        break;
      case 'playing':
        this.state.playing = true;
        break;
      case 'pause':
        this.state.playing = false;
        break;
      case 'timeupdate':
        this.state.currentTime = this.audioObj.currentTime;
        this.state.readableCurrentTime = this.formatTime(this.state.currentTime);
        break;
      case 'error':
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }

  private resetState(): void {
    this.state = defaultState;
  }

  public killAudio() {
    this.stop$.next(true);
    this.audioObj.setAttribute('src', '');
    this.audioObj.load();
    this.resetState();
    this.stateChange.next(defaultState);
  }

  public getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }

  public play(): void {
    this.audioObj.play().catch(console.error);
  }

  public pause(): void {
    this.audioObj.pause();
  }

  public stop(): void {
    this.stop$.next(true);
  }

  public seekTo(seconds: number): void {
    this.audioObj.currentTime = seconds;
  }
}
