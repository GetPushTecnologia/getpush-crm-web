import { RouterModule, Routes } from "@angular/router";
import { DividendosModuloComponent } from "./dividendos-modulo.component";
import { NgModule } from "@angular/core";
import { NovoDividendoComponent } from "./novo-dividendo/novo-dividendo.component";
import { NovoTipoDividendoComponent } from "./novo-tipo-dividendo/novo-tipo-dividendo.component";

const routes: Routes = [{
    path: '',
    component: DividendosModuloComponent,
    children: [
        {
            path: 'novo-modulo',
            component: NovoDividendoComponent
        },
        {
            path: 'novo-tipo-dividendo',
            component: NovoTipoDividendoComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DividendosModuloRoutingModule { }

export const routedComponents = [
    DividendosModuloComponent,
    
]