import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';

import {CardAlimentacaoDiaComponent} from '../components/card-alimentacao-dia/card-alimentacao-dia.component'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule
  ],
  declarations: [Tab3Page,CardAlimentacaoDiaComponent]
})
export class Tab3PageModule {}
