import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { RecebiveisModuloRoutingModule, routedComponents } from './recebiveis-modulo.routing.module';
import { NovoTipoRecebiveisComponent } from './novo-tipo-recebiveis/novo-tipo-recebiveis.component';
import { SharedModule } from '../../shared/shared.module';


const components = [
  NovoTipoRecebiveisComponent
]

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    RecebiveisModuloRoutingModule,
    SharedModule
  ],
  declarations: [
    ...routedComponents,
    ...components
  ],
})
export class RecebiveisModuloModule { }
