import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngx-cadastrar-contas-pagas',
  templateUrl: './cadastrar-contas-pagas.component.html',
  styleUrls: ['./cadastrar-contas-pagas.component.scss']
})
export class CadastrarContasPagasComponent {
  @Output() apptotalContaPagaReturn: EventEmitter<number> = new EventEmitter<number>();

  totalContaPagaReturn(event: any) {
    this.apptotalContaPagaReturn.emit(event);
  }
}
