import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxoCaixaRoutingModule, routedComponents } from './fluxo-caixa.routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ChartsModule } from '../charts/charts.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DividendosComponent } from '../components/fluxo-caixa/dividendos/dividendos.component';
import { RecebiveisComponent } from '../components/fluxo-caixa/recebiveis/recebiveis.component';
import { GraficoLinhaComponent } from '../components/graficos/grafico-linha/grafico-linha.component';
import { GraficoPizzaComponent } from '../components/graficos/grafico-pizza/grafico-pizza.component';
import { ChartModule } from 'angular2-chartjs';
import { TipoDividendosComponent } from '../components/fluxo-caixa/tipo-dividendos/tipo-dividendos.component';
import { TipoRecebiveisComponent } from '../components/fluxo-caixa/tipo-recebiveis/tipo-recebiveis.component';

const components = [ 
  DividendosComponent,
    RecebiveisComponent,
    GraficoLinhaComponent,
    GraficoPizzaComponent,
    TipoDividendosComponent,
    TipoRecebiveisComponent
]
@NgModule({  
  imports: [
    CommonModule,
    ThemeModule,
    FluxoCaixaRoutingModule,
    FormsModule,
    NbCardModule,
    NbIconModule,
    ChartsModule,
    NgxEchartsModule,
    NgxChartsModule,
    Ng2SmartTableModule,
    NbDatepickerModule.forRoot(),
    NbInputModule,
    NbButtonModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
  ],
  declarations: [
    ...routedComponents,
    ...components
  ]
})
export class FluxoCaixaModule { }
