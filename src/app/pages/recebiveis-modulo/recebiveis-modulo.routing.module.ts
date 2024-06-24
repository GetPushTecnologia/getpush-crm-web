import { RouterModule, Routes } from "@angular/router";
import { RecebiveisModuloComponent } from "./recebiveis-modulo.component";
import { NgModule } from "@angular/core";
import { NovoRecebiveisComponent } from "./novo-recebiveis/novo-recebiveis.component";
import { NovoTipoRecebiveisComponent } from "./novo-tipo-recebiveis/novo-tipo-recebiveis.component";

const routes: Routes = [{
    path: '',
    component: RecebiveisModuloComponent,
    children: [
        {
            path: 'novo-recebiveis',
            component: NovoRecebiveisComponent
        },
        {
            path: 'novo-tipo-recebiveis',
            component: NovoTipoRecebiveisComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecebiveisModuloRoutingModule { }

export const routedComponents = [
    RecebiveisModuloComponent,
    NovoRecebiveisComponent,
    NovoTipoRecebiveisComponent
]