import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ThemeModule } from "../../@theme/theme.module";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NbButtonModule } from "@nebular/theme";
import { EstoqueCadastroComponent } from './estoque-cadastro/estoque-cadastro.component';
import { EstoqueRoutingModule, routedComponents } from "./estoque-routing.module";

@NgModule({  
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbButtonModule,
    EstoqueRoutingModule
  ],
  declarations: [
    ...routedComponents
  ],
})
export class EstoqueModule { }
