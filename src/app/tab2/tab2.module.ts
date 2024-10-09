import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { CardTreinoComponent } from '../components/card-treino/card-treino.component'; // Importe o componente se necessário

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, CardTreinoComponent]
})
export class Tab2PageModule {}
