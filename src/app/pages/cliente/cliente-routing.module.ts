import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente.component';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';
import { CKEditorComponent } from './ckeditor/ckeditor.component';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';

const routes: Routes = [{
  path: '',
  component: ClienteComponent,
  children: [{
    path: 'tinymce',
    component: TinyMCEComponent,
    }, 
    {
      path: 'ckeditor',
      component: CKEditorComponent,
    },
    {
      path: 'cliente-novo',
      component: ClienteNovoComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule { }

export const routedComponents = [
  ClienteComponent,
  TinyMCEComponent,
  CKEditorComponent,
  ClienteNovoComponent
];
