import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuLateralAtributosComponent } from './menu-lateral-atributos.component';

describe('MenuLateralAtributosComponent', () => {
  let component: MenuLateralAtributosComponent;
  let fixture: ComponentFixture<MenuLateralAtributosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLateralAtributosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuLateralAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
