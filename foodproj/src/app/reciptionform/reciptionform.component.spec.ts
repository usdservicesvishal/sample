import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptionformComponent } from './reciptionform.component';

describe('ReciptionformComponent', () => {
  let component: ReciptionformComponent;
  let fixture: ComponentFixture<ReciptionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciptionformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
