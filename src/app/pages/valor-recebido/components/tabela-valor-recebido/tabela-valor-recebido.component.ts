import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NbDialogService, NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { PopupTipoValorRecebidoComponent } from '../popup-tipo-valor-recebido/popup-tipo-valor-recebido.component';
import { LocalDataSource } from 'ng2-smart-table';
import { NegocioDataValorRecebidoService } from '../../../../../services/ValorRecebidoController/negocio-data-valorRecebido.service';
import { CurrencyFormatPipeComponent } from '../../../components/custom/custom-pipes/currency-format-pipe.component';
import { DatePipe } from '@angular/common';
import Utils from '../../../../shared/Utils';
import { CustomEditorMoedaComponent } from '../../../components/custom/custom-editor-moeda/custom-editor-moeda.component';
import { CustomEditorTipoValorRecebidoComponent } from '../../../components/custom/custom-editor-tipo-valor-recebido/custom-editor-tipo-valor-recebido.component';
import { ValorRecebido } from '../../../../shared/Entities/ValorRecebido';
import { TipoValorRecebido } from '../../../../shared/Entities/TipoValorRecebido';
import { CustomEditorDateComponent } from '../../../components/custom/custom-editor-date/custom-editor-date.component';

@Component({
  selector: 'ngx-tabela-valor-recebido',
  templateUrl: './tabela-valor-recebido.component.html',
  styleUrls: ['./tabela-valor-recebido.component.scss'],
  providers: [CurrencyFormatPipeComponent]
})
export class TabelaValorRecebidoComponent implements OnInit {
  @Output() totalValorRecebidoReturn: EventEmitter<number> = new EventEmitter<number>();
  source: LocalDataSource = new LocalDataSource();
  logicalPositions = NbGlobalLogicalPosition;

  private utils: Utils;
  totalRegistros: number = 0;

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
        title: 'Tipo Valor',
        type: 'html',
        renderComponent: CustomEditorTipoValorRecebidoComponent,
        editor: {
          type: 'custom',
          component: CustomEditorTipoValorRecebidoComponent
        },
        valuePrepareFunction: (cell, row) => {
          return row.tipoValorRecebido ? row.tipoValorRecebido.descricao.toString() : '';
        }
      },
      valor_recebido: {
        title: 'Valor',
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
      data_recebimento : {
        title: 'Data Recebimento',
          type: 'html',
          editor: {
            type: 'custom',
            component: CustomEditorDateComponent,
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

  popupTipoValorRecebido() {
    this.dialogService.open(PopupTipoValorRecebidoComponent, { });
  }

  carregaDados() {
    this.negocioService.GetValorRecebido().subscribe(
      sucesso => {

        sucesso.data.forEach(element => {
          element.data_recebimento =  this.utils.transformDate(element.data_recebimento, 'yyyy-MM-dd');
        });

        this.source.load(sucesso.data);
        this.totalRegistros = sucesso.data.length;

        let valorTotal: number = 0;
        sucesso.data.forEach(element => {
          valorTotal += element.valor_recebido;
        });

        this.totalValorRecebidoReturn.emit(valorTotal);
      },
      erro => {
        this.toastrService.show('Erro ao carregar valor recebido', erro.error.Message, {
          status: 'danger',
          position: this.logicalPositions.BOTTOM_END
        })
      }
    )
  }

  adicionarValorRecebido(event: any) {
    this.validarDadosValorRecebido(event, true);
  }

  editarValorRecebido(event: any) {
    this.validarDadosValorRecebido(event, false);
  }

  deletarValorRecebido(event: any) {
    if (window.confirm('Tem certeza que deseja excluir o valor recebido?')) {
      let valorRecebido: ValorRecebido = new ValorRecebido({
        id: event.data.id,
        descricao: '',
        tipoValorRecebido: new TipoValorRecebido({
          id: null,
          code: 0,
          descricao: ''
        }),
        data_recebimento: new Date(),
        valor: 0
      });

      this.deletar(valorRecebido, event);
    } else {
      event.confirm.reject();
    }
  }

  validarDadosValorRecebido(event: any, incluir: boolean) {
    let data = event.newData;
    let idValorRecebido: string = (data.id !== '' && data.id !== undefined) ? data.id : null;

    let valorRecebido: ValorRecebido = new ValorRecebido({
      id: idValorRecebido,
      descricao: data.descricao,
      tipoValorRecebido: new TipoValorRecebido({
        id: null,
        code: 1,
        descricao: ''
      }),
      data_recebimento: data.data_recebimento,
      valor: data.valor_recebido
    });

    if (incluir) {
      this.adicionar(valorRecebido, event);
    } else {
      this.atualizar(valorRecebido, event);
    }
  }

  adicionar(valorRecebido: ValorRecebido, event: any) {
    this.negocioService.InsertValorRecebido(valorRecebido).subscribe(() => {
        this.toastrService.show('Sucesso', "Valor Recebido cadastrado com sucesso", {
          status: 'primary',
          position: this.logicalPositions.TOP_END
        })

        event.confirm.resolve();
      }, erro => {
        this.toastrService.show('Erro', 'Erro ao inserir valor recebido - ' + erro.error.Message, {
          status: 'danger',
          position: this.logicalPositions.TOP_END
        })

        event.confirm.reject();
      }
    )
  }

  atualizar(valorRecebido: ValorRecebido, event: any)  {
    this.negocioService.UpdateValorRecebido(valorRecebido).subscribe(() => {
        this.toastrService.show('Sucesso', "Valor Recebido atualizado com sucesso", {
          status: 'success',
          position: this.logicalPositions.TOP_END
        })

        event.confirm.resolve();
      }, erro => {
        this.toastrService.show('Erro ao atualizar valor recebido', erro.error.Message, {
          status: 'danger',
          position: this.logicalPositions.TOP_END
        })

        event.confirm.reject();
      }
    )
  }

  deletar(valorRecebido: ValorRecebido, event: any) {
    this.negocioService.DeleteValorRecebido(valorRecebido.id).subscribe(() => {
        this.toastrService.show('Sucesso', "Valor Recebido deletado com sucesso", {
          status: 'success',
          position: this.logicalPositions.TOP_END
        })

        event.confirm.resolve();
      }, erro => {
        this.toastrService.show('Erro ao deletar valor recebido', erro.error.Message, {
          status: 'danger',
          position: this.logicalPositions.TOP_END
        })

        event.confirm.reject();
      }
    )
  }

}
