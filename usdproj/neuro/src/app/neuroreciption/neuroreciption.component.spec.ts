import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuroreciptionComponent } from './neuroreciption.component';

describe('NeuroreciptionComponent', () => {
  let component: NeuroreciptionComponent;
  let fixture: ComponentFixture<NeuroreciptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuroreciptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuroreciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
