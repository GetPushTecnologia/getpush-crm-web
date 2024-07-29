import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // {
    //   path: 'dashboard',
    //   component: ECommerceComponent,
    // },
    // {
    //   path: 'iot-dashboard',
    //   component: DashboardComponent,
    // },
    {
      path: '',
      redirectTo: 'fluxo-caixa/fluxo-caixa-painel',
      pathMatch: 'full',
    },
    {
      path: 'fluxo-caixa',
      loadChildren: () => import('./fluxo-caixa/fluxo-caixa.module')
        .then(m => m.FluxoCaixaModule)
    },
    // {
    //   path: 'layout',
    //   loadChildren: () => import('./layout/layout.module')
    //     .then(m => m.LayoutModule),
    // },

    // {
    //     path: 'modal-overlays',
    //     loadChildren: () => import('./modal-overlays/modal-overlays.module')
    //       .then(m => m.ModalOverlaysModule),
    // },
    // {
    //   path: 'charts',
    //   loadChildren: () => import('./charts/charts.module')
    //     .then(m => m.ChartsModule)
    // },
    // {
    //   path: 'cliente',
    //   loadChildren: () => import('./cliente/cliente.module')
    //     .then(m => m.ClienteModule)
    // },
    // {
    //   path: 'estoque',
    //   loadChildren: () => import('./estoque/estoque.module')
    //     .then(m => m.EstoqueModule)
    // },
    // {
    //   path: 'vendas',
    //   loadChildren: () => import('./vendas/vendas.module')
    //     .then(m => m.VendasModule)
    // },
    // {
    //   path: 'forms',
    //   loadChildren: () => import('./forms/forms.module')
    //     .then(m => m.FormsModule),
    // },
    {
      path: 'contas-pagas',
      loadChildren: () => import('./contas-pagas/contas-pagas.module')
        .then(m => m.ContasPagasModule)
    },
    {
      path: 'valor-recebido',
      loadChildren: () => import('./valor-recebido/valor-recebido.module')
        .then(m => m.ValorRecebidoModule)
    },

    // {
    //   path: 'miscellaneous',
    //   loadChildren: () => import('./miscellaneous/miscellaneous.module')
    //     .then(m => m.MiscellaneousModule),
    // },
   {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
