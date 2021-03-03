import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereciptionComponent } from './createreciption.component';

describe('CreatereciptionComponent', () => {
  let component: CreatereciptionComponent;
  let fixture: ComponentFixture<CreatereciptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatereciptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatereciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
