import { Component, OnInit } from '@angular/core';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-fluxo-caixa-painel',
  templateUrl: './fluxo-caixa-painel.component.html',
  styleUrls: ['./fluxo-caixa-painel.component.scss']
})
export class FluxoCaixaPainelComponent implements OnInit {
  options: any = {};

  min: Date;
  max: Date;

  valorPago: number;
  valorRecebido: number;
  total: number;

  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }
  ngOnInit(): void {
    this.total = this.valorPago - this.valorRecebido;
  }

  formatarMoeda(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }
s
  apptotalContaPagaReturn(event: any) {
    this.valorPago = event;
    this.total = this.valorPago - this.valorRecebido;
  }

  appTotalValorRecebidoReturn(event: any){
    this.valorRecebido = event;
    this.total = this.valorRecebido - this.valorPago;
  }
}
