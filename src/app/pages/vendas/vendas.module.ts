import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendasRoutingModule, routedComponents } from './vendas-routing.module';
import { PropectoComponent } from '../components/vendas/propecto/propecto.component';
import { NegociacaoComponent } from '../components/vendas/negociacao/negociacao.component';
import { VendaFechadaComponent } from '../components/vendas/venda-fechada/venda-fechada.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbStepperModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    VendasRoutingModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
  ],
  declarations: [
    ...routedComponents,
    PropectoComponent,
    NegociacaoComponent,
    VendaFechadaComponent  
  ]
})
export class VendasModule { }
