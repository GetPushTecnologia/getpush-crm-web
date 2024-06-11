import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { CKEditorModule } from 'ng2-ckeditor';

import { ThemeModule } from '../../@theme/theme.module';

import { ClienteRoutingModule, routedComponents } from './cliente-routing.module';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    ClienteRoutingModule,
    CKEditorModule,
  ],
  declarations: [
    ...routedComponents    
  ],
})
export class ClienteModule { }
