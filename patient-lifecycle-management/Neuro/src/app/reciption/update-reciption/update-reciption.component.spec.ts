import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReciptionComponent } from './update-reciption.component';

describe('UpdateReciptionComponent', () => {
  let component: UpdateReciptionComponent;
  let fixture: ComponentFixture<UpdateReciptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReciptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
