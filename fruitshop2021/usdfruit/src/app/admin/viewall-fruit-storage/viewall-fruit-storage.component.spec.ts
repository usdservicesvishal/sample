import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallFruitStorageComponent } from './viewall-fruit-storage.component';

describe('ViewallFruitStorageComponent', () => {
  let component: ViewallFruitStorageComponent;
  let fixture: ComponentFixture<ViewallFruitStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallFruitStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallFruitStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
