import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReciptionComponent } from './create-reciption.component';

describe('CreateReciptionComponent', () => {
  let component: CreateReciptionComponent;
  let fixture: ComponentFixture<CreateReciptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReciptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
