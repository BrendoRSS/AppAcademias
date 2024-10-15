import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosPessoaisPageRoutingModule } from './dados-pessoais-routing.module';

import { DadosPessoaisPage } from './dados-pessoais.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DadosPessoaisPageRoutingModule
  ],
  declarations: [DadosPessoaisPage]
})
export class DadosPessoaisPageModule {}
