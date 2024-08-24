import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomEditorTipoValorRecebidoComponent } from './components/custom/custom-editor-tipo-valor-recebido/custom-editor-tipo-valor-recebido.component';
import { CustomEditorDateComponent } from './components/custom/custom-editor-date/custom-editor-date.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    NbMenuModule,
    SharedModule
  ],
  declarations: [
    PagesComponent,
    CustomEditorTipoValorRecebidoComponent,
    CustomEditorDateComponent    
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule {
}
