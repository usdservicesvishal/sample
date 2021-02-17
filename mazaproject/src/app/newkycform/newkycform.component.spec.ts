import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewkycformComponent } from './newkycform.component';

describe('NewkycformComponent', () => {
  let component: NewkycformComponent;
  let fixture: ComponentFixture<NewkycformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewkycformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewkycformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
