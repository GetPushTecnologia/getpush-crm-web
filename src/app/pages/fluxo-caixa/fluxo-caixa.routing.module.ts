import { RouterModule, Routes } from "@angular/router";
import { FluxoCaixaPainelComponent } from "./fluxo-caixa-painel/fluxo-caixa-painel.component";
import { NgModule } from "@angular/core";
import { FluxoCaixaComponent } from "./fluxo-caixa.component";

const routes: Routes = [{
    path: '',
    component: FluxoCaixaComponent,
    children: [
        {
            path: 'fluxo-caixa-painel',
            component: FluxoCaixaPainelComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FluxoCaixaRoutingModule { }

export const routedComponents = [
    FluxoCaixaComponent,
    FluxoCaixaPainelComponent
]