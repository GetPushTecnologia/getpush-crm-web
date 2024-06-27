import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { DividendosModuloRoutingModule, routedComponents } from './dividendos-modulo.routing.module';
import { NovoTipoDividendoComponent } from './novo-tipo-dividendo/novo-tipo-dividendo.component';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from '../../shared/shared.module';
import { NovoDividendoComponent } from './novo-dividendo/novo-dividendo.component';


const components = [
  NovoTipoDividendoComponent,
  NovoDividendoComponent
]
@NgModule({
  imports: [
    CommonModule,
    DividendosModuloRoutingModule,
    SharedModule
  ],
  declarations: [
    ...routedComponents,
    ...components
  ],
})
export class DividendosModuloModule { }
