import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    NbMenuModule,
    SharedModule
  ],
  declarations: [
    PagesComponent
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule {
}
