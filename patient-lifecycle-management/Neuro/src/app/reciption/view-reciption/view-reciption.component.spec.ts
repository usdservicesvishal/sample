import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReciptionComponent } from './view-reciption.component';

describe('ViewReciptionComponent', () => {
  let component: ViewReciptionComponent;
  let fixture: ComponentFixture<ViewReciptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReciptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
