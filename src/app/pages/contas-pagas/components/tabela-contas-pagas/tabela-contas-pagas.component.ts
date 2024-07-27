import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { PopupTipoContasPagasComponent } from '../popup-tipo-contas-pagas/popup-tipo-contas-pagas.component';
import { NegocioDataContasPagasService } from '../../../../../services/ContasPagasController/negocio-data-contasPagas.service';

@Component({
  selector: 'ngx-tabela-contas-pagas',
  templateUrl: './tabela-contas-pagas.component.html',
  styleUrls: ['./tabela-contas-pagas.component.scss']
})
export class TabelaContasPagasComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  settings: any;
  logicalPositions = NbGlobalLogicalPosition;

  constructor(private dialogService: NbDialogService,
    private negocioService: NegocioDataContasPagasService,
    private toastrService: NbToastrService
  ){}

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
        tipoConta: {
          title: 'Tipo Conta',
          type: 'string',

        },
        valor: {
          title: 'Valor Pago',
          type: 'number',
          with: '10%'
        }
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
