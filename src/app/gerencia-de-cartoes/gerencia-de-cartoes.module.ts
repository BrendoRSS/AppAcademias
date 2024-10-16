import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenciaDeCartoesPageRoutingModule } from './gerencia-de-cartoes-routing.module';

import { GerenciaDeCartoesPage } from './gerencia-de-cartoes.page';
import { CardPagamentoGerCartaoComponent } from '../components/card-pagamento-ger-cartao/card-pagamento-ger-cartao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciaDeCartoesPageRoutingModule
  ],
  declarations: [GerenciaDeCartoesPage, CardPagamentoGerCartaoComponent]
})
export class GerenciaDeCartoesPageModule {}
