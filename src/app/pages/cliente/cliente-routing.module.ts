import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente.component';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';

const routes: Routes = [{
  path: '',
  component: ClienteComponent,
  children: [
    {
      path: 'cliente-novo',
      component: ClienteNovoComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule { }

export const routedComponents = [
  ClienteComponent,
  ClienteNovoComponent
];
