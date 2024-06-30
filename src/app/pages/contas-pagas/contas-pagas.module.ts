import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ContasPagasRoutingModule, routedComponents } from './contas-pagas.routing.module';
import { CadastrarContasPagasComponent } from './cadastrar-contas-pagas/cadastrar-contas-pagas.component';
import { CadastrarTipoContasPagasComponent } from './cadastrar-tipo-contas-pagas/cadastrar-tipo-contas-pagas.component';
import { TabelaContasPagasComponent } from './components/tabela-contas-pagas/tabela-contas-pagas.component';
import { TabelaTipoContasPagasComponent } from './components/tabela-tipo-contas-pagas/tabela-tipo-contas-pagas.component';
import { PopupTipoContasPagasComponent } from './components/popup-tipo-contas-pagas/popup-tipo-contas-pagas.component';

const components = [
  CadastrarContasPagasComponent,
  CadastrarTipoContasPagasComponent,
  TabelaContasPagasComponent,
  TabelaTipoContasPagasComponent,
  PopupTipoContasPagasComponent
]

@NgModule({ 
  imports: [
    CommonModule,
    ContasPagasRoutingModule,
    SharedModule
  ],
  declarations: [
    ...routedComponents,
    ...components
  ],
  exports: [
    ...components
  ]
})
export class ContasPagasModule { }
