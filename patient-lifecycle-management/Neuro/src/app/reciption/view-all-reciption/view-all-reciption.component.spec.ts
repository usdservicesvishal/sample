import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllReciptionComponent } from './view-all-reciption.component';

describe('ViewAllReciptionComponent', () => {
  let component: ViewAllReciptionComponent;
  let fixture: ComponentFixture<ViewAllReciptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllReciptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllReciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
