import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFruitStorageComponent } from './delete-fruit-storage.component';

describe('DeleteFruitStorageComponent', () => {
  let component: DeleteFruitStorageComponent;
  let fixture: ComponentFixture<DeleteFruitStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFruitStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFruitStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
