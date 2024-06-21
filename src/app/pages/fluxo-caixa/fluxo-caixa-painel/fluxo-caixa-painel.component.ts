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
  
  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }
}
