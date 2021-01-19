import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionmemberComponent } from './admissionmember.component';

describe('AdmissionmemberComponent', () => {
  let component: AdmissionmemberComponent;
  let fixture: ComponentFixture<AdmissionmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
