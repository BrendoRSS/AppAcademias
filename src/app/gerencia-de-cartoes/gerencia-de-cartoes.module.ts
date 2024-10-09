import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenciaDeCartoesPageRoutingModule } from './gerencia-de-cartoes-routing.module';

import { GerenciaDeCartoesPage } from './gerencia-de-cartoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciaDeCartoesPageRoutingModule
  ],
  declarations: [GerenciaDeCartoesPage]
})
export class GerenciaDeCartoesPageModule {}
