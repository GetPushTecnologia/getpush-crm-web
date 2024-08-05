import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngx-cadastrar-valor-recebido',
  templateUrl: './cadastrar-valor-recebido.component.html',
  styleUrls: ['./cadastrar-valor-recebido.component.scss']
})
export class CadastrarValorRecebidoComponent {
  @Output() appTotalValorRecebidoReturn: EventEmitter<number> = new EventEmitter<number>();

  totalValorRecebidoReturn(event: any){
    this.appTotalValorRecebidoReturn.emit(event);
  }
}
