import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'submit',
    loadChildren: () => import('./submit/submit.module').then( m => m.SubmitPageModule)
  },
  {
    path: 'gerencia-de-cartoes',
    loadChildren: () => import('./gerencia-de-cartoes/gerencia-de-cartoes.module').then( m => m.GerenciaDeCartoesPageModule)
  },
  {
    path: 'dados-pessoais',
    loadChildren: () => import('./dados-pessoais/dados-pessoais.module').then( m => m.DadosPessoaisPageModule)
  },
  {
    path: 'avaliacoes-fisica',
    loadChildren: () => import('./avaliacoes-fisica/avaliacoes-fisica.module').then( m => m.AvaliacoesFisicaPageModule)
  },
  {
    path: 'sobre-nos',
    loadChildren: () => import('./sobre-nos/sobre-nos.module').then( m => m.SobreNosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
