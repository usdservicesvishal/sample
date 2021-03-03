import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallreciptionComponent } from './viewallreciption.component';

describe('ViewallreciptionComponent', () => {
  let component: ViewallreciptionComponent;
  let fixture: ComponentFixture<ViewallreciptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallreciptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallreciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
