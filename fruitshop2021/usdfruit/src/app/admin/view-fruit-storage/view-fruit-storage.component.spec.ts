import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFruitStorageComponent } from './view-fruit-storage.component';

describe('ViewFruitStorageComponent', () => {
  let component: ViewFruitStorageComponent;
  let fixture: ComponentFixture<ViewFruitStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFruitStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFruitStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
