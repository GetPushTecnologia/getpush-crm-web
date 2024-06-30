import { RouterModule, Routes } from "@angular/router";
import { ContasPagasComponent } from "./contas-pagas.component";
import { NgModule } from "@angular/core";
import { CadastrarContasPagasComponent } from "./cadastrar-contas-pagas/cadastrar-contas-pagas.component";
import { CadastrarTipoContasPagasComponent } from "./cadastrar-tipo-contas-pagas/cadastrar-tipo-contas-pagas.component";

const routes: Routes = [{
    path: '',
    component: ContasPagasComponent,
    children: [
        {
            path: 'cadastrar-contas-pagas',
            component: CadastrarContasPagasComponent
        },
        {
            path: 'cadastrar-tipo-contas-pagas',
            component: CadastrarTipoContasPagasComponent
        }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContasPagasRoutingModule { }

export const routedComponents = [
    ContasPagasComponent
]