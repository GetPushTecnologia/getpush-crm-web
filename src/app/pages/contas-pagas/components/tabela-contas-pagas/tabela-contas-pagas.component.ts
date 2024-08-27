import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NbDialogService, NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { PopupTipoContasPagasComponent } from '../popup-tipo-contas-pagas/popup-tipo-contas-pagas.component';
import { NegocioDataContaPagaService } from '../../../../../services/ContaPagaController/negocio-data-contaPaga.service';
import { CustomEditorMoedaComponent } from '../../../components/custom/custom-editor-moeda/custom-editor-moeda.component';
import Utils from '../../../../shared/Utils';
import { CurrencyFormatPipeComponent } from '../../../components/custom/custom-pipes/currency-format-pipe.component';
import { CustomEditorTipoContaPagaComponent } from '../../../components/custom/custom-editor-tipo-conta-paga/custom-editor-tipo-conta-paga.component';
import { DatePipe } from '@angular/common';
import { ContaPaga } from '../../../../shared/Entities/ContaPaga';
import { CustomEditorDateComponent } from '../../../components/custom/custom-editor-date/custom-editor-date.component';
import { TipoContaPaga } from '../../../../shared/Entities/TipoContaPaga';

@Component({
  selector: 'ngx-tabela-contas-pagas',
  templateUrl: './tabela-contas-pagas.component.html',
  styleUrls: ['./tabela-contas-pagas.component.scss'],
  providers: [CurrencyFormatPipeComponent]
})
export class TabelaContasPagasComponent implements OnInit {
  @Output() totalContaPagaReturn: EventEmitter<number> = new EventEmitter<number>();

  source: LocalDataSource = new LocalDataSource();
  settings: any;
  logicalPositions = NbGlobalLogicalPosition;

  private utils: Utils;

  constructor(private dialogService: NbDialogService,
    private negocioService: NegocioDataContaPagaService,
    private toastrService: NbToastrService,
    private currencyPipe: CurrencyFormatPipeComponent,
    private datePipe: DatePipe
  ){
    this.utils = new Utils(this.currencyPipe, this.datePipe);
  }

  ngOnInit(): void {
    this.carregaSettings();
    this.carregaDados();
  }

  carregaSettings() {
    this.settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmCreate: true
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmSave: true
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      actions: {
        ColumnTitle: "",
        add: true,
        edit: true,
        delete: true
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
        valor_pago: {
          title: 'Valor Pago',
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
        data_pagamento : {
          title: 'Data Pagamento',
          type: 'html',
          editor: {
            type: 'custom',
            component: CustomEditorDateComponent
          },
          width: '12%',
          valuePrepareFunction: (value) => {
            return this.utils.transformDate(value, 'dd/MM/yyyy');
          },
          filterFunction: (value, search) => {
            let match = this.utils.transformDate(value, 'dd/MM/yyyy').indexOf(search) > -1
            if (match || search === '') { return true; }
            else { return false; }
          }
        },
        data_cadastro: {
          title: 'Cadastro',
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
        },
      }
    }
  }

  carregaDados() {
    this.negocioService.GetContaPaga().subscribe(
      value => {
        this.source.load(value.data);

        let valorTotal: number = 0;
        value.data.forEach(element => {
          valorTotal += element.valor_pago;
          element.data_pagamento =  this.utils.transformDate(element.data_pagamento, 'yyyy-MM-dd');
        });

        this.totalContaPagaReturn.emit(valorTotal);
      },
      value => this.toastrService.show('Erro ao carregar contas pagas', value.error.Message, {
        status: 'danger',
        position: this.logicalPositions.BOTTOM_END
      })
    )
  }

  popupTipoContasPagas() {
    this.dialogService.open(PopupTipoContasPagasComponent, { });
  }

  adicionarContaPaga(event: any) {
    this.validarDadosContaPaga(event, true);
  }

  editarContaPaga(event: any): void {
    this.validarDadosContaPaga(event, false);
  }

  deletarContaPaga(event: any): void {
    if (window.confirm('Tem certeza que deseja excluir o valor recebido?')) {
      let contaPaga: ContaPaga = new ContaPaga({
        id: event.data.id,
        descricao: '',
        tipoContaPaga: new TipoContaPaga({
          id: null,
          code: 0,
          descricao: ''
        }),
        data_pagamento: new Date(),
        valor: 0
      });

      this.deletar(contaPaga, event);
    } else {
      event.confirm.reject();
    }
  }

  validarDadosContaPaga(event: any, incluir: boolean) {
    let data = event.newData;
    let idContaPaga: string = (data.id !== '' && data.id != undefined) ? data.id : null;

    let contaPaga: ContaPaga = new ContaPaga({
      id: idContaPaga,
      descricao: data.descricao,
      tipoContaPaga: new TipoContaPaga ({
        id: null,
        code: data.code,
        descricao: ''
      }),
      data_pagamento: data.data_pagamento,
      valor: data.valor_pago
    });

    if (incluir) {
      this.adicionar(contaPaga, event);
    } else {
      this.atualizar(contaPaga, event);
    }
  }

  adicionar(contaPaga: ContaPaga, event: any) {
    this.negocioService.InsertContaPaga(contaPaga).subscribe(() => {
      this.toastrService.show('Sucesso', "Conta paga cadastrado com sucesso", {
        status: 'success',
        position: this.logicalPositions.TOP_END
      })

        event.confirm.resolve();
        this.carregaDados();
      }, erro => {
        this.toastrService.show('Erro', 'Erro ao inserir conta paga - ' + erro.error.Message, {
          status: 'danger',
          position: this.logicalPositions.TOP_END
        })

        event.confirm.reject();
      }
    )
  }

  atualizar(contaPaga: ContaPaga, event: any) {
    this.negocioService.UpdateContaPaga(contaPaga).subscribe(() => {
      this.toastrService.show('Sucesso', "Conta paga atualizado com sucesso", {
        status: 'success',
        position: this.logicalPositions.TOP_END
      })

      event.confirm.resolve();
      this.carregaDados();
      }, erro => {
        this.toastrService.show('Erro ao atualizar conta paga', erro.error.Message, {
          status: 'danger',
          position: this.logicalPositions.TOP_END
        })

        event.confirm.reject();
      }
    )
  }

  deletar(contaPaga: ContaPaga, event: any) {
    this.negocioService.DeleteContaPaga(contaPaga.id).subscribe(() => {
      this.toastrService.show('Sucesso', "Conta paga deletada com sucesso", {
        status: 'success',
        position: this.logicalPositions.TOP_END
      })

      event.confirm.resolve();
      this.carregaDados();
    }, erro => {
      this.toastrService.show('Erro ao deletar conta paga', erro.error.Message, {
        status: 'danger',
        position: this.logicalPositions.TOP_END
      })

      event.confirm.reject();
    }
  )
  }
}
