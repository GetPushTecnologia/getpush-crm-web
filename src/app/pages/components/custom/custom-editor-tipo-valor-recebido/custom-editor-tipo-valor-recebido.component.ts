import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { DefaultEditor } from 'ng2-smart-table';
import { IOption } from '../../../../shared/interface/IOption.model';
import { NegocioDataTipoValorRecebidoService } from '../../../../../services/TipoValorRecebidoController/negocio-data-tipoValorRecebido.service';

@Component({
  selector: 'ngx-custom-editor-tipo-valor-recebido',
  templateUrl: './custom-editor-tipo-valor-recebido.component.html',
  styleUrls: ['./custom-editor-tipo-valor-recebido.component.scss']
})
export class CustomEditorTipoValorRecebidoComponent extends DefaultEditor implements AfterViewInit, OnInit {
  logicalPositions = NbGlobalLogicalPosition;

  myOptions: Array<IOption> = [];

  constructor(private negocioService: NegocioDataTipoValorRecebidoService,
    private toastrService: NbToastrService) {
      super();
  }

  ngOnInit() {
    this.carregaDados();
    if (!this.cell.newValue) {
      this.cell.newValue = this.cell.getRow().getData().tipoValorRecebido.code.toString();
    }
  }

  ngAfterViewInit() {
    if (this.cell.newValue !== '') {
      //TODO:
    }
  }

  carregaDados() {
    this.negocioService.GetTipoValorRecebido().subscribe(
      value => {
        value.data.forEach(element => {
          this.myOptions.push({ label: element.descricao, value: element.code.toString() });
        });
      },
      value => this.toastrService.show('Erro ao carregar tipo de valor pago', value.error.Message, {
        status: 'danger',
        position: this.logicalPositions.TOP_END
      })
    )
  }
}
