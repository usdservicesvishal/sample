import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DermatomeMyotomePage } from './dermatome-myotome.page';

describe('DermatomeMyotomePage', () => {
  let component: DermatomeMyotomePage;
  let fixture: ComponentFixture<DermatomeMyotomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DermatomeMyotomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DermatomeMyotomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
