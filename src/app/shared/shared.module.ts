import { NgModule } from "@angular/core";
import { RecebiveisComponent } from "../pages/components/fluxo-caixa/recebiveis/recebiveis.component";
import { DividendosComponent } from "../pages/components/fluxo-caixa/dividendos/dividendos.component";
import { TipoRecebiveisComponent } from "../pages/components/fluxo-caixa/tipo-recebiveis/tipo-recebiveis.component";
import { TipoDividendosComponent } from "../pages/components/fluxo-caixa/tipo-dividendos/tipo-dividendos.component";
import { CommonModule } from "@angular/common";
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "../@theme/theme.module";
import { ChartModule } from "angular2-chartjs";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { ChartsModule } from "../pages/charts/charts.module";

@NgModule({
    declarations: [
        DividendosComponent,
        RecebiveisComponent,
        TipoDividendosComponent,
        TipoRecebiveisComponent,
    ],
    imports: [
        CommonModule,
        ThemeModule,
        NbCardModule,
        Ng2SmartTableModule,
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
    exports: [
        DividendosComponent,
        RecebiveisComponent,
        TipoDividendosComponent,
        TipoRecebiveisComponent,

        NbCardModule,
        Ng2SmartTableModule,
        NbIconModule,
        ChartsModule,
        NgxEchartsModule,
        NgxChartsModule,
        Ng2SmartTableModule,
        NbDatepickerModule,
        NbInputModule,
        NbButtonModule,
        NgxEchartsModule,
        NgxChartsModule,
        ChartModule
    ]
})
export class SharedModule {}