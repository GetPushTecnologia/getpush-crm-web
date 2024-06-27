import { NgModule } from '@angular/core';
import { NbCardModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TipoRecebiveisComponent } from './components/fluxo-caixa/tipo-recebiveis/tipo-recebiveis.component';
import { TipoDividendosComponent } from './components/fluxo-caixa/tipo-dividendos/tipo-dividendos.component';
import { RecebiveisComponent } from './components/fluxo-caixa/recebiveis/recebiveis.component';
import { DividendosComponent } from './components/fluxo-caixa/dividendos/dividendos.component';
import { PopupComponent } from './components/popup/popup/popup.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    PagesComponent,

  ],
  exports: [ 
    
  ]
})
export class PagesModule {
}
