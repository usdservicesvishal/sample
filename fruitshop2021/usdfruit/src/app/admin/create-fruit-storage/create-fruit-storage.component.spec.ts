import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFruitStorageComponent } from './create-fruit-storage.component';

describe('CreateFruitStorageComponent', () => {
  let component: CreateFruitStorageComponent;
  let fixture: ComponentFixture<CreateFruitStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFruitStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFruitStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
