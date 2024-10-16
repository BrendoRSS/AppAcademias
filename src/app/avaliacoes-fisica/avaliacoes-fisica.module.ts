import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaliacoesFisicaPageRoutingModule } from './avaliacoes-fisica-routing.module';

import { AvaliacoesFisicaPage } from './avaliacoes-fisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaliacoesFisicaPageRoutingModule
  ],
  declarations: [AvaliacoesFisicaPage]
})
export class AvaliacoesFisicaPageModule {}
