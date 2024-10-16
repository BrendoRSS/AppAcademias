import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';

import { Tab4PageRoutingModule } from './tab4-routing.module';
import { StatusPagamentoComponent } from '../components/status-pagamento/status-pagamento.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page, StatusPagamentoComponent]
})
export class Tab4PageModule {}
