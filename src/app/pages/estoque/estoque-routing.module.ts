import { RouterModule, Routes } from "@angular/router";
import { EstoqueCadastroComponent } from "./estoque-cadastro/estoque-cadastro.component";
import { EstoqueComponent } from "./estoque.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{
    path: '',
    component: EstoqueComponent,
    children: [
        {
            path: 'estoque-cadastro',
            component: EstoqueCadastroComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstoqueRoutingModule { }

export const routedComponents = [
    EstoqueComponent,
    EstoqueCadastroComponent
];