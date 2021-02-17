import { TestBed } from '@angular/core/testing';

import { UserkycService } from './userkyc.service';

describe('UserkycService', () => {
  let service: UserkycService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserkycService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
