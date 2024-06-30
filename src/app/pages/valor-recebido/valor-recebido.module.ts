import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ValorRecebidoRoutingModule, routedComponents } from './valor-recebido.routing.module';
import { TabelaValorRecebidoComponent } from './components/tabela-valor-recebido/tabela-valor-recebido.component';
import { TabelaTipoValorRecebidoComponent } from './components/tabela-tipo-valor-recebido/tabela-tipo-valor-recebido.component';
import { PopupTipoValorRecebidoComponent } from './components/popup-tipo-valor-recebido/popup-tipo-valor-recebido.component';
import { CadastrarTipoValorRecebidoComponent } from './cadastrar-tipo-valor-recebido/cadastrar-tipo-valor-recebido.component';
import { CadastrarValorRecebidoComponent } from './cadastrar-valor-recebido/cadastrar-valor-recebido.component';

const components = [
  TabelaValorRecebidoComponent,
  TabelaTipoValorRecebidoComponent,
  PopupTipoValorRecebidoComponent,
  CadastrarTipoValorRecebidoComponent,
  CadastrarValorRecebidoComponent
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ValorRecebidoRoutingModule,
    ValorRecebidoModule
  ],
  declarations: [
    ...routedComponents,
    ...components
  ],
  // exports: [
  //   ...components
  // ]
})
export class ValorRecebidoModule { }
