import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-popup-tipo-valor-recebido',
  templateUrl: './popup-tipo-valor-recebido.component.html',
  styleUrls: ['./popup-tipo-valor-recebido.component.scss']
})
export class PopupTipoValorRecebidoComponent {

  constructor(protected ref: NbDialogRef<PopupTipoValorRecebidoComponent>){ }
  
  fechar() {
    this.ref.close()
  }
}
