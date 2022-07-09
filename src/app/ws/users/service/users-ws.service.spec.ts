import { TestBed } from '@angular/core/testing';

import { UsersWsService } from './users-ws.service';

describe('PlayerWsService', () => {
  let service: UsersWsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersWsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
