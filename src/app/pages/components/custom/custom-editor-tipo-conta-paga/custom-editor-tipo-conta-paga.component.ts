import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';
import { IOption } from '../../../../shared/interface/IOption.model';
import { NegocioDataTipoContasPagasService } from '../../../../../services/TipoContaPagaController/negocio-data-tipoContaPaga.service';
import { NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-custom-editor-tipo-conta-paga',
  templateUrl: './custom-editor-tipo-conta-paga.component.html',
  styleUrls: ['./custom-editor-tipo-conta-paga.component.scss']
})
export class CustomEditorTipoContaPagaComponent extends DefaultEditor implements AfterViewInit, OnInit {
  logicalPositions = NbGlobalLogicalPosition;

  myOptions: Array<IOption> = [];

  constructor(private negocioService: NegocioDataTipoContasPagasService,
    private toastrService: NbToastrService
  ) {
    super();
  }

  ngOnInit() {
    this.carregaDados();
    if (!this.cell.newValue) {
      this.cell.newValue = this.cell.getRow().getData().tipoContaPaga.code.toString();
    }
  }

  ngAfterViewInit() {
    if (this.cell.newValue !== '') {
      //TODO:
    }
  }

  carregaDados() {
    this.negocioService.GetTipoContaPaga().subscribe(
      value => {
        value.data.forEach(element => {
          this.myOptions.push({ label: element.descricao, value: element.code.toString() });
        });
      },
      value => this.toastrService.show('Erro ao carregar tipo de conta paga', value.error.Message, {
        status: 'danger',
        position: this.logicalPositions.TOP_END
      })
    )
  }
}
