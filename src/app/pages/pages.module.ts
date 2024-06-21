import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from './charts/charts.module';
import { DividentosComponent } from './components/fluxo-caixa/dividentos/dividentos.component';
import { RecebiveisComponent } from './components/fluxo-caixa/recebiveis/recebiveis.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule,
    ChartsModule
  ],
  declarations: [
    PagesComponent,
      
  ],
})
export class PagesModule {
}
