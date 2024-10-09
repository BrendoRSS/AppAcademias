import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardAlimentacaoDiaComponent } from './card-alimentacao-dia.component';

describe('CardAlimentacaoDiaComponent', () => {
  let component: CardAlimentacaoDiaComponent;
  let fixture: ComponentFixture<CardAlimentacaoDiaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAlimentacaoDiaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardAlimentacaoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
