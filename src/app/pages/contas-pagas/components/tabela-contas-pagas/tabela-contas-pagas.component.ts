import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { PopupTipoContasPagasComponent } from '../popup-tipo-contas-pagas/popup-tipo-contas-pagas.component';

@Component({
  selector: 'ngx-tabela-contas-pagas',
  templateUrl: './tabela-contas-pagas.component.html',
  styleUrls: ['./tabela-contas-pagas.component.scss']
})
export class TabelaContasPagasComponent implements OnInit {
  
  source: LocalDataSource = new LocalDataSource();

  constructor(private dialogService: NbDialogService){}

  ngOnInit(): void {
    this.source.load(this.data);
  }

  data = [
    {
      descricao: 'Luz',
      tipoConta: 'Conta Mensal',
      valorPago: 'R$ 100,00'
    },
    {
      descricao: 'Embalagem',
      tipoConta: 'Produto',
      valorPago: 'R$ 1.050,00'
    },
    {
      descricao: 'Açucar',
      tipoConta: 'Produto',
      valorPago: 'R$ 500,00'
    },
    {
      descricao: 'Aluguel',
      tipoConta: 'Conta Mensal',
      valorPago: 'R$ 2.500,00'
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
      tipoConta: {
        title: 'Tipo Conta',
        type: 'string',

      },
      valorPago: {
        title: 'Valor Pago',
        type: 'number',
        with: '10%'
      }      
    }
  }


  popupTipoContasPagas() {
 this.dialogService.open(PopupTipoContasPagasComponent, { });
  }
}
