import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereciptionComponent } from './updatereciption.component';

describe('UpdatereciptionComponent', () => {
  let component: UpdatereciptionComponent;
  let fixture: ComponentFixture<UpdatereciptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatereciptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatereciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
