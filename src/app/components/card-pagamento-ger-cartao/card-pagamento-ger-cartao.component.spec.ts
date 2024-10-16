import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardPagamentoGerCartaoComponent } from './card-pagamento-ger-cartao.component';

describe('CardPagamentoGerCartaoComponent', () => {
  let component: CardPagamentoGerCartaoComponent;
  let fixture: ComponentFixture<CardPagamentoGerCartaoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPagamentoGerCartaoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardPagamentoGerCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
