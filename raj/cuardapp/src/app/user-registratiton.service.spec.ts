import { TestBed } from '@angular/core/testing';

import { UserRegistratitonService } from './user-registratiton.service';

describe('UserRegistratitonService', () => {
  let service: UserRegistratitonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistratitonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
