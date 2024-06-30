import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbWindowModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "../@theme/theme.module";
import { ChartModule } from "angular2-chartjs";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { ChartsModule } from "../pages/charts/charts.module";

@NgModule({
    declarations: [
       
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
        ChartModule,    
    ],    
})
export class SharedModule {}