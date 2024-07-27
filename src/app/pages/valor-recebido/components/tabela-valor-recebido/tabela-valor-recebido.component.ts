import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopupTipoValorRecebidoComponent } from '../popup-tipo-valor-recebido/popup-tipo-valor-recebido.component';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-tabela-valor-recebido',
  templateUrl: './tabela-valor-recebido.component.html',
  styleUrls: ['./tabela-valor-recebido.component.scss']
})
export class TabelaValorRecebidoComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();

  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {
    this.source.load(this.data);
  }

  data = [
    {
      descricao: 'Pipoca',
      tipoValorRecebido: 'Venda',
      valorRecebido: 'R$ 18,00'
    },
    {
      descricao: 'Imprestimo',
      tipoValorRecebido: 'Credito',
      valorRecebido: 'R$ 50.000,00'
    },
    {
      descricao: 'Cesta de cafe',
      tipoValorRecebido: 'Venda',
      valorRecebido: 'R$ 150,00'
    },
    {
      descricao: 'Pipoca',
      tipoValorRecebido: 'Venda',
      valorRecebido: 'R$ 18,00'
    },
  ]

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
      }
    }
  }

  popupTipoValorRecebido() {
    this.dialogService.open(PopupTipoValorRecebidoComponent, { });
  }
}
