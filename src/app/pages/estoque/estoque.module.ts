import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ThemeModule } from "../../@theme/theme.module";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbSelectModule, NbTabsetModule } from "@nebular/theme";
import { EstoqueRoutingModule, routedComponents } from "./estoque-routing.module";
import { ProdutoComponent } from "../components/estoque/produto/produto.component";
import { ServicoComponent } from "../components/estoque/servico/servico.component";

@NgModule({  
  imports: [
    FormsModule,
    NbCardModule,
    ThemeModule,
    NbSelectModule,
    NbInputModule,
    NbDatepickerModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbAccordionModule,
    NbTabsetModule,
    EstoqueRoutingModule
  ],
  declarations: [
    ...routedComponents,
    ProdutoComponent,
    ServicoComponent
  ],
})
export class EstoqueModule { }
