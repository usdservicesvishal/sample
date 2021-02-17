import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReciptionComponent } from './delete-reciption.component';

describe('DeleteReciptionComponent', () => {
  let component: DeleteReciptionComponent;
  let fixture: ComponentFixture<DeleteReciptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteReciptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
