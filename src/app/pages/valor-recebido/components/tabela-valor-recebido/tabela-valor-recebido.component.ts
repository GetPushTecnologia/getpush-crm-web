import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { PopupTipoValorRecebidoComponent } from '../popup-tipo-valor-recebido/popup-tipo-valor-recebido.component';
import { LocalDataSource } from 'ng2-smart-table';
import { NegocioDataValorRecebidoService } from '../../../../../services/ValorRecebidoController/negocio-data-valorRecebido.service';
import { CurrencyFormatPipeComponent } from '../../../components/custom/custom-pipes/currency-format-pipe.component';
import { DatePipe } from '@angular/common';
import Utils from '../../../../shared/Utils';

@Component({
  selector: 'ngx-tabela-valor-recebido',
  templateUrl: './tabela-valor-recebido.component.html',
  styleUrls: ['./tabela-valor-recebido.component.scss'],
  providers: [CurrencyFormatPipeComponent]
})
export class TabelaValorRecebidoComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  logicalPositions = NbGlobalLogicalPosition;

  private utils: Utils;

  constructor(private dialogService: NbDialogService,
    private negocioService: NegocioDataValorRecebidoService,
    private toastrService: NbToastrService,
    private currencyPipe: CurrencyFormatPipeComponent,
    private datePipe: DatePipe
  ) {
    this.utils = new Utils(this.currencyPipe, this.datePipe);
  }

  ngOnInit(): void {

    this.carregaDados();
  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      descricao: {
        title: 'Descrição',
        type: 'string',
        with: '16%'
      },
      tipoValorRecebido: {
        title: 'Tipo Valor',
        type: 'string'
      },
      valorRecebido: {
        title: 'Valor Unitário',
        type: 'number',
        with: '10%'
      },
      data_recebimento : {
        title: 'Data Recebimento',
          type: 'html',
          editor: {
            type: 'custom',
          },
          width: '12%',
          valuePrepareFunction: (value) => {
            return value != "0001-01-01T00:00:00" ? this.utils.transformDate(value, 'dd/MM/yyyy HH:mm:ss') : "";
          },
          filterFunction: (value, search) => {
            let match = this.utils.transformDate(value, 'dd/MM/yyyy HH:mm:ss').indexOf(search) > -1
            return (match || search === '') ? true :  false;
          }
      }
    }
  }

  popupTipoValorRecebido() {
    this.dialogService.open(PopupTipoValorRecebidoComponent, { });
  }

  carregaDados() {
    this.negocioService.GetValorRecebido().subscribe(
      value => this.source.load(value.data),
      value => {
        this.toastrService.show('Erro ao carregar valor recebido', value.error.Message, {
          status: 'danger',
          position: this.logicalPositions.BOTTOM_END
        })
      }
    )
  }
}
