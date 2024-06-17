import { NgModule } from '@angular/core';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbTabsetModule } from '@nebular/theme';
import { CKEditorModule } from 'ng2-ckeditor';
import { ThemeModule } from '../../@theme/theme.module';
import { ClienteRoutingModule, routedComponents } from './cliente-routing.module';
import { NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { ClienteFormularioComponent } from '../components/cliente/cliente-formulario/cliente-formulario.component';
import { EnderecoComponent } from '../components/cliente/endereco/endereco.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ContatosComponent } from '../components/cliente/contatos/contatos.component';
import { TelefoneComponent } from '../components/cliente/telefone/telefone.component';
import { EmailComponent } from '../components/cliente/email/email.component';

@NgModule({
  imports: [
    FormsModule,
    NbCardModule,
    ThemeModule,
    ClienteRoutingModule,
    CKEditorModule,
    NbSelectModule,
    NbInputModule,
    NbDatepickerModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbAccordionModule,
    NbTabsetModule
  ],
  declarations: [
    ...routedComponents,
    ClienteFormularioComponent,
    EnderecoComponent,
    ContatosComponent,
    TelefoneComponent,
    EmailComponent
  ],
})
export class ClienteModule { }
