import { Component } from '@angular/core';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-fluxo-caixa-painel',
  templateUrl: './fluxo-caixa-painel.component.html',
  styleUrls: ['./fluxo-caixa-painel.component.scss']
})
export class FluxoCaixaPainelComponent {
  options: any = {};

  min: Date;
  max: Date;

  valorAPagar: number = 1400.00;
  valorAReceber: number = 3400.00;
  total: number = this.valorAReceber - this.valorAPagar;

  aPagar: string = "R$ 1.400,00";
  aReceber: string = "R$ 3.400,00";  
  
  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }
}
