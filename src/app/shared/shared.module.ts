import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbSelectModule, NbWindowModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "../@theme/theme.module";
import { ChartModule } from "angular2-chartjs";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { ChartsModule } from "../pages/charts/charts.module";
import { DashboardModule } from "../pages/dashboard/dashboard.module";
import { ECommerceModule } from "../pages/e-commerce/e-commerce.module";
import { MiscellaneousModule } from "../pages/miscellaneous/miscellaneous.module";
import { CustomEditorMoedaComponent } from "../pages/components/custom/custom-editor-moeda/custom-editor-moeda.component";
import { FormsModule } from "@angular/forms";
import { CURRENCY_MASK_CONFIG, CurrencyMaskConfig, CurrencyMaskModule } from "ng2-currency-mask";
import { CustomEditorTipoContaPagaComponent } from "../pages/components/custom/custom-editor-tipo-conta-paga/custom-editor-tipo-conta-paga.component";

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

const COMPONENTS = [
  CustomEditorMoedaComponent,
  CustomEditorTipoContaPagaComponent
]

const MODULES = [
  FormsModule,
  CommonModule,
  ThemeModule,
  NbCardModule,
  Ng2SmartTableModule,
  NbIconModule,
  ChartsModule,
  NgxEchartsModule,
  NgxChartsModule,
  NbDatepickerModule,
  NbInputModule,
  NbButtonModule,
  ChartModule,
  DashboardModule,
  ECommerceModule,
  MiscellaneousModule,
  NbWindowModule,
  NbSelectModule,
  CurrencyMaskModule
]

@NgModule({
    declarations: [
      ...COMPONENTS,

    ],
    imports: [
       ...MODULES,
       NbDatepickerModule.forRoot(),
       NbWindowModule.forRoot(),
    ],
    exports: [
        ...COMPONENTS,
        ...MODULES
    ],
    providers: [
      { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
    ]
})
export class SharedModule {}
