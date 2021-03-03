import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletereciptionComponent } from './deletereciption.component';

describe('DeletereciptionComponent', () => {
  let component: DeletereciptionComponent;
  let fixture: ComponentFixture<DeletereciptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletereciptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletereciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
