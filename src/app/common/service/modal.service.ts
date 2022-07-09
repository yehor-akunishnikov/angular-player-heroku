import {Injectable} from '@angular/core';

import {BehaviorSubject, map, Observable} from 'rxjs';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals = new BehaviorSubject<any>({});

  public watch(id: string): Observable<boolean | null> {
    return this.modals.asObservable().pipe(map(modals => {
      return modals[id] || null;
    }));
  }

  public open(id: string): void {
    this.modals.next({...this.modals.value, [id]: true});
  }

  public close(id: string): void {
    this.modals.next({...this.modals.value, [id]: false});
  }

  public addModal(defaultState: boolean): string {
    const id = uuidv4();

    this.modals.next({...this.modals.value, [id]: defaultState ?? false});

    return id;
  }

  public removeModal(id: string): void {
    const modals = {...this.modals.value};

    delete modals[id];

    this.modals.next(modals);
  }
}
