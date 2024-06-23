import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
// import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // {
    //   path: 'dashboard',
    //   component: ECommerceComponent,
    // },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
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

    {
        path: 'modal-overlays',
        loadChildren: () => import('./modal-overlays/modal-overlays.module')
          .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule)
    },
    {
      path: 'cliente',
      loadChildren: () => import('./cliente/cliente.module')
        .then(m => m.ClienteModule)
    },
    {    
      path: 'estoque',
      loadChildren: () => import('./estoque/estoque.module')
        .then(m => m.EstoqueModule)
    },
    {
      path: 'vendas',
      loadChildren: () => import('./vendas/vendas.module')
        .then(m => m.VendasModule)  
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    // {
    //   path: 'miscellaneous',
    //   loadChildren: () => import('./miscellaneous/miscellaneous.module')
    //     .then(m => m.MiscellaneousModule),
    // },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    // {
    //   path: '**',
    //   component: NotFoundComponent,
    // },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
