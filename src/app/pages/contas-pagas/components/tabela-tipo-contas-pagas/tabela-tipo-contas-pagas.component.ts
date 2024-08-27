import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NegocioDataTipoContasPagasService } from '../../../../../services/TipoContaPagaController/negocio-data-tipoContaPaga.service';
import { NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { TipoContaPaga } from '../../../../shared/Entities/TipoContaPaga';

@Component({
  selector: 'ngx-tabela-tipo-contas-pagas',
  templateUrl: './tabela-tipo-contas-pagas.component.html',
  styleUrls: ['./tabela-tipo-contas-pagas.component.scss']
})
export class TabelaTipoContasPagasComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  settings: any;
  logicalPositions = NbGlobalLogicalPosition;

  constructor(private negocioService: NegocioDataTipoContasPagasService,
    private toastrService: NbToastrService
  ) {}

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
        }
      }
    }
  }

  carregaDados() {
    this.negocioService.GetTipoContaPaga().subscribe(
      value => this.source.load(value.data),
      value => {
        this.toastrService.show(value.error.Message, 'Erro ao carregar tipos de conta' , {
          status: 'danger',
          position: this.logicalPositions.TOP_END
        })
      }
    )
  }

  adicionarTipoContaPaga(event: any) {
    this.validarDadosTipoContaPaga(event, true);
  }

  editarTipoContaPaga(event: any){
    this.validarDadosTipoContaPaga(event, false);
  }

  deletarTipoContaPaga(event: any) {
    if (window.confirm('Tem certeza que deseja excluir o valor recebido?')) {
      let tipoContaPaga: TipoContaPaga = new TipoContaPaga({
          id: event.data.id,
          code: event.data.code,
          descricao: event.data.descricao
        });

      this.deletar(tipoContaPaga, event);
    } else {
      event.confirm.reject();
    }
  }

  validarDadosTipoContaPaga(event: any, incluir: boolean) {
    let data = event.newData;
    let idTipoContaPaga: string = (data.id !== '' && data.id != undefined) ? data.id : null;

    let tipoContaPaga: TipoContaPaga = new TipoContaPaga ({
        id: idTipoContaPaga,
        code: data.code,
        descricao: data.descricao
      });

    if (incluir) {
      this.adicionar(tipoContaPaga, event);
    } else {
      this.atualizar(tipoContaPaga, event);
    }
  }

  adicionar(tipoContaPaga: TipoContaPaga, event: any) {
    this.negocioService.InsertTipoContaPaga(tipoContaPaga).subscribe(() => {
      this.toastrService.show('Tipo Conta paga cadastrado com sucesso', 'Sucesso', {
        status: 'success',
        position: this.logicalPositions.TOP_END
      })

        event.confirm.resolve();
        this.carregaDados();
      }, erro => {
        this.toastrService.show(erro.error.Message, 'Erro ao inserir tipo conta paga', {
          status: 'danger',
          position: this.logicalPositions.TOP_END
        })

        event.confirm.reject();
      }
    )
  }

  atualizar(tipoContaPaga: TipoContaPaga, event: any) {
    this.negocioService.UpdateTipoContaPaga(tipoContaPaga).subscribe(() => {
      this.toastrService.show("Tipo Conta paga atualizado com sucesso", 'Sucesso',  {
        status: 'success',
        position: this.logicalPositions.TOP_END
      })

        event.confirm.resolve();
        this.carregaDados();
      }, erro => {
        this.toastrService.show(erro.error.Message, 'Erro ao atualizar tipo conta paga' , {
          status: 'danger',
          position: this.logicalPositions.TOP_END
        })

        event.confirm.reject();
      }
    )
  }

  deletar(tipoContaPaga: TipoContaPaga, event: any) {
    this.negocioService.DeleteTipoContaPaga(tipoContaPaga.id).subscribe(() => {
      this.toastrService.show('Sucesso', "Conta paga deletada com sucesso", {
        status: 'success',
        position: this.logicalPositions.TOP_END
      })

      event.confirm.resolve();
      this.carregaDados();
      }, erro => {
        this.toastrService.show(erro.error.Message, 'Erro ao deletar conta paga', {
          status: 'danger',
          position: this.logicalPositions.TOP_END
        })

        event.confirm.reject();
      }
    )
  }
}
