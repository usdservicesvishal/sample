import { TestBed } from '@angular/core/testing';

import { NeuroreciptionService } from './neuroreciption.service';

describe('NeuroreciptionService', () => {
  let service: NeuroreciptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeuroreciptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
