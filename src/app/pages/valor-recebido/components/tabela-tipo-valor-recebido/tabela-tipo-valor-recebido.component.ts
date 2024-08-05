import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { NegocioDataTipoValorRecebidoService } from '../../../../../services/TipoValorRecebidoController/negocio-data-tipoValorRecebido.service';

@Component({
  selector: 'ngx-tabela-tipo-valor-recebido',
  templateUrl: './tabela-tipo-valor-recebido.component.html',
  styleUrls: ['./tabela-tipo-valor-recebido.component.scss']
})
export class TabelaTipoValorRecebidoComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  settings: any;
  logicalPositions = NbGlobalLogicalPosition;

  constructor(private negocioService: NegocioDataTipoValorRecebidoService,
    private toastrService: NbToastrService) {}

  ngOnInit(): void {
   this.carregarSetting();
   this.carregaDados();
  }

  carregarSetting() {
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
    this.negocioService.GetTipoValorRecebido().subscribe(
      value => this.source.load(value.data),
      value => {
        this.toastrService.show('Erro ao carregar tipos de conta', value.error.Message, {
          status: 'danger', position: this.logicalPositions.BOTTOM_END
        })
      }
    )
  }
}
