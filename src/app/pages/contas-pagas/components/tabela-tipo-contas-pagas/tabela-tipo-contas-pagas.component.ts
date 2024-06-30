import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-tabela-tipo-contas-pagas',
  templateUrl: './tabela-tipo-contas-pagas.component.html',
  styleUrls: ['./tabela-tipo-contas-pagas.component.scss']
})
export class TabelaTipoContasPagasComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();

  constructor( ) {}

  ngOnInit(): void {
    this.source.load(this.data);
  }

  data = [
    {
      descricao: 'Conta Mensal',
    },
    {
      descricao: 'Produto',
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
      }
    }
  }

 
}
