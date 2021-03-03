import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreciptionComponent } from './viewreciption.component';

describe('ViewreciptionComponent', () => {
  let component: ViewreciptionComponent;
  let fixture: ComponentFixture<ViewreciptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewreciptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
