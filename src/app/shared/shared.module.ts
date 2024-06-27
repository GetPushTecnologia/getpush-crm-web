import { NgModule } from "@angular/core";
import { RecebiveisComponent } from "../pages/components/fluxo-caixa/recebiveis/recebiveis.component";
import { DividendosComponent } from "../pages/components/fluxo-caixa/dividendos/dividendos.component";
import { TipoRecebiveisComponent } from "../pages/components/fluxo-caixa/tipo-recebiveis/tipo-recebiveis.component";
import { TipoDividendosComponent } from "../pages/components/fluxo-caixa/tipo-dividendos/tipo-dividendos.component";
import { CommonModule } from "@angular/common";
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbWindowModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "../@theme/theme.module";
import { ChartModule } from "angular2-chartjs";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { ChartsModule } from "../pages/charts/charts.module";
import { PopupComponent } from "../pages/components/popup/popup/popup.component";

@NgModule({
    declarations: [
        DividendosComponent,
        RecebiveisComponent,
        TipoDividendosComponent,
        TipoRecebiveisComponent,
        PopupComponent
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
        NbWindowModule.forRoot(), 
    ],
    exports: [
        DividendosComponent,
        RecebiveisComponent,
        TipoDividendosComponent,
        TipoRecebiveisComponent,
        PopupComponent,
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
    ],
    entryComponents: [PopupComponent],
})
export class SharedModule {}