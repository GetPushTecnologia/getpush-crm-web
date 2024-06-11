import { NgModule } from '@angular/core';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { CKEditorModule } from 'ng2-ckeditor';
import { ThemeModule } from '../../@theme/theme.module';
import { ClienteRoutingModule, routedComponents } from './cliente-routing.module';
import { NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    NbCardModule,
    ThemeModule,
    ClienteRoutingModule,
    CKEditorModule,
    NbSelectModule,
    NbInputModule
  ],
  declarations: [
    ...routedComponents    
  ],
})
export class ClienteModule { }
