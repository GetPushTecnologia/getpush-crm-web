import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-tipo-dividendos',
  templateUrl: './tipo-dividendos.component.html',
  styleUrls: ['./tipo-dividendos.component.scss'],
})
export class TipoDividendosComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  constructor( ) {}

  ngOnInit(): void {
    this.source.load(this.data);
  }

  data = [
    {
      descricao: 'Porta',
      valorUnitario: 'R$ 100,00'
    },
    {
      descricao: 'Janela',
      valorUnitario: 'R$ 50,00'
    },
    {
      descricao: 'Sofá',
      valorUnitario: 'R$ 3.500,00'
    },
    {
      descricao: 'Geladeira',
      valorUnitario: 'R$ 5.000,00'
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
      valorUnitario: {
        title: 'Valor Unitário',
        type: 'number',
        with: '10%'
      }      
    }
  }
}
