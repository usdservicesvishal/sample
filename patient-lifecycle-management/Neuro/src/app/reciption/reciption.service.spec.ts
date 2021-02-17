import { TestBed } from '@angular/core/testing';

import { ReciptionService } from './reciption.service';

describe('ReciptionService', () => {
  let service: ReciptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
