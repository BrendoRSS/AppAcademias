import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridHistoricoTreinoComponent } from './grid-historico-treino.component';

describe('GridHistoricoTreinoComponent', () => {
  let component: GridHistoricoTreinoComponent;
  let fixture: ComponentFixture<GridHistoricoTreinoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHistoricoTreinoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridHistoricoTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
