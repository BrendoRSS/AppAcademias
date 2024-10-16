import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvaliacoesFisicaPage } from './avaliacoes-fisica.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliacoesFisicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaliacoesFisicaPageRoutingModule {}
