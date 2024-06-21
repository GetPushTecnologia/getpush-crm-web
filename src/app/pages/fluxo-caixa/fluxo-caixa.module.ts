import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluxoCaixaRoutingModule, routedComponents } from './fluxo-caixa.routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ChartjsPieComponent } from '../charts/chartjs/chartjs-pie.component';
import { ChartsModule } from '../charts/charts.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DividentosComponent } from '../components/fluxo-caixa/dividentos/dividentos.component';
import { RecebiveisComponent } from '../components/fluxo-caixa/recebiveis/recebiveis.component';

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
    NbButtonModule
  ],
  declarations: [
    ...routedComponents,
    DividentosComponent,
    RecebiveisComponent
  ]
})
export class FluxoCaixaModule { }
