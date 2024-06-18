import { Component, Input } from '@angular/core';
import { NbComponentStatus, NbDateService } from '@nebular/theme';
@Component({
  selector: 'ngx-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss']
})
export class ClienteFormularioComponent {
  @Input() tipoPessoa: string;

  min: Date;
  max: Date;

  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }
}
