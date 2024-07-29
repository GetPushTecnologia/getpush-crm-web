import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { PopupTipoContasPagasComponent } from '../popup-tipo-contas-pagas/popup-tipo-contas-pagas.component';
import { NegocioDataContasPagasService } from '../../../../../services/ContasPagasController/negocio-data-contasPagas.service';
import { CustomEditorMoedaComponent } from '../../../components/custom/custom-editor-moeda/custom-editor-moeda.component';
import Utils from '../../../../shared/Utils';
import { CurrencyFormatPipeComponent } from '../../../components/custom/custom-pipes/currency-format-pipe.component';
import { CustomEditorTipoContaPagaComponent } from '../../../components/custom/custom-editor-tipo-conta-paga/custom-editor-tipo-conta-paga.component';

@Component({
  selector: 'ngx-tabela-contas-pagas',
  templateUrl: './tabela-contas-pagas.component.html',
  styleUrls: ['./tabela-contas-pagas.component.scss'],
  providers: [CurrencyFormatPipeComponent]
})
export class TabelaContasPagasComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  settings: any;
  logicalPositions = NbGlobalLogicalPosition;

  private utils: Utils;

  constructor(private dialogService: NbDialogService,
    private negocioService: NegocioDataContasPagasService,
    private toastrService: NbToastrService,
    private currencyPipe: CurrencyFormatPipeComponent
  ){}

  ngOnInit(): void {

    this.utils = new Utils(this.currencyPipe);

    this.carregaSettings();
    this.carregaDados();
  }

  carregaSettings() {
    this.settings = {
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
        code: {
          title: 'Tipo Conta',
          type: 'html',
          renderComponent: CustomEditorTipoContaPagaComponent,
          editor: {
            type: 'custom',
            component: CustomEditorTipoContaPagaComponent
          },
          valuePrepareFunction: (cell, row) => {
            return row.tipoContaPaga ? row.tipoContaPaga.descricao.toString() : '';
          }
        },
        valor: {
          title: 'Preço',
          type: 'html',
          filter: true,
          editor: {
            type: 'custom',
            component: CustomEditorMoedaComponent,
          },
          valuePrepareFunction: (value) => {
            return this.utils.transformCurrency(value, 'R$', '1.2-2');
          },
          filterFunction: (value, search) => {
            let match = this.utils.transformCurrency(value, 'R$', '1.2-2').indexOf(search) > -1
            if (match || search === '') { return true; }
            else { return false; }
          }
        },
      }
    }
  }

  carregaDados() {
    this.negocioService.GetContasPagas().subscribe(
      value => this.source.load(value.data),
      value => this.toastrService.show('Erro ao carregar contas pagas', value.error.Message, {
        status: 'danger',
        position: this.logicalPositions.BOTTOM_END
      })
    )
  }

  popupTipoContasPagas() {
    this.dialogService.open(PopupTipoContasPagasComponent, { });
  }
}
