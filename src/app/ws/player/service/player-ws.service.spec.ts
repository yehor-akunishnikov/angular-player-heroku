import { TestBed } from '@angular/core/testing';

import { PlayerWsService } from './player-ws.service';

describe('PlayerWsService', () => {
  let service: PlayerWsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerWsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
