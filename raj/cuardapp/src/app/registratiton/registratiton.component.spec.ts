import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratitonComponent } from './registratiton.component';

describe('RegistratitonComponent', () => {
  let component: RegistratitonComponent;
  let fixture: ComponentFixture<RegistratitonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistratitonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
