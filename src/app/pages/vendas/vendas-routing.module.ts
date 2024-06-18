import { RouterModule, Routes } from "@angular/router";
import { VendasComponent } from "./vendas.component";
import { VendasNovoComponent } from "./vendas-novo/vendas-novo.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{
    path: '',
    component: VendasComponent,
    children: [
        {
            path: 'vendas-novo',
            component: VendasNovoComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendasRoutingModule {

}

export const routedComponents = [
    VendasComponent,
    VendasNovoComponent
]