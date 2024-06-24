import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { RecebiveisModuloRoutingModule, routedComponents } from './recebiveis-modulo.routing.module';
import { NovoTipoRecebiveisComponent } from './novo-tipo-recebiveis/novo-tipo-recebiveis.component';
import { NovoRecebiveisComponent } from './novo-recebiveis/novo-recebiveis.component';
import { DividendosComponent } from '../components/fluxo-caixa/dividendos/dividendos.component';

const components = [
  NovoTipoRecebiveisComponent,
  NovoRecebiveisComponent,
  // DividendosComponent
]

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    RecebiveisModuloRoutingModule
  ],
  declarations: [
    ...routedComponents,
    ...components
  ],
})
export class RecebiveisModuloModule { }
