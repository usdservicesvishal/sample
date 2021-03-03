import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllReceptionComponent } from './view-all-reception.component';

describe('ViewAllReceptionComponent', () => {
  let component: ViewAllReceptionComponent;
  let fixture: ComponentFixture<ViewAllReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllReceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
