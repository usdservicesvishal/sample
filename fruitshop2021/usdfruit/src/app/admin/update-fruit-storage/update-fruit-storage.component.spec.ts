import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFruitStorageComponent } from './update-fruit-storage.component';

describe('UpdateFruitStorageComponent', () => {
  let component: UpdateFruitStorageComponent;
  let fixture: ComponentFixture<UpdateFruitStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFruitStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFruitStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
