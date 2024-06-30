import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-popup-tipo-contas-pagas',
  templateUrl: './popup-tipo-contas-pagas.component.html',
  styleUrls: ['./popup-tipo-contas-pagas.component.scss']
})
export class PopupTipoContasPagasComponent {

  constructor(protected ref: NbDialogRef<PopupTipoContasPagasComponent>){ }

  fechar() {
    this.ref.close()
  }
}
