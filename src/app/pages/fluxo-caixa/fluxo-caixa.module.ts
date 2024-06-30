import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxoCaixaRoutingModule, routedComponents } from './fluxo-caixa.routing.module';
import { FormsModule } from '@angular/forms';
import { GraficoLinhaComponent } from '../components/graficos/grafico-linha/grafico-linha.component';
import { GraficoPizzaComponent } from '../components/graficos/grafico-pizza/grafico-pizza.component';
import { SharedModule } from '../../shared/shared.module';
import { ContasPagasModule } from '../contas-pagas/contas-pagas.module';
import { ValorRecebidoModule } from '../valor-recebido/valor-recebido.module';

const components = [
  GraficoLinhaComponent,
  GraficoPizzaComponent,  
]
@NgModule({  
  imports: [
    CommonModule,
    FluxoCaixaRoutingModule,
    FormsModule,
    SharedModule,
    ContasPagasModule,
    ValorRecebidoModule
  ],
  declarations: [
    ...routedComponents,
    ...components
  ],

})
export class FluxoCaixaModule { }
