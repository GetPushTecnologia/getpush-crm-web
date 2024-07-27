import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NegocioDataTipoContasPagasService } from '../../../../../services/TipoContasPagasController/negocio-data-tipoContasPagas.service';
import { NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';

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
        }
      }
    }
  }

  carregaDados() {
    this.negocioService.GetTipoContaPaga().subscribe(
      value => this.source.load(value.data),
      value => this.toastrService.show('Erro ao carregar tipos de conta', value.error.Message, {
        status: 'danger',
        position: this.logicalPositions.BOTTOM_END
      })
    )
  }
}
