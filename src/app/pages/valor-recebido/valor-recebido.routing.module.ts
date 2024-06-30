import { RouterModule, Routes } from "@angular/router";
import { ValorRecebidoComponent } from "./valor-recebido.component";
import { NgModule } from "@angular/core";
import { CadastrarTipoValorRecebidoComponent } from "./cadastrar-tipo-valor-recebido/cadastrar-tipo-valor-recebido.component";
import { CadastrarValorRecebidoComponent } from "./cadastrar-valor-recebido/cadastrar-valor-recebido.component";

const routes: Routes = [{
    path: '',
    component: ValorRecebidoComponent,
    children: [
        {
            path: 'cadastrar-valor-recebido',
            component: CadastrarValorRecebidoComponent 
        },
        {
            path: 'cadastrar-tipo-valor-recebido',
            component: CadastrarTipoValorRecebidoComponent
        }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ValorRecebidoRoutingModule { }

export const routedComponents = [
    ValorRecebidoComponent
]