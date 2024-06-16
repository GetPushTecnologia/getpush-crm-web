import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss']
})
export class ServicoComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  constructor(){}

  ngOnInit(): void {
    this.source.load(this.data);
  }

  data = [
    {
      descricao: 'Programação',
      valor: 'R$ 100,00'
    },
    {
      descricao: 'Markting',
      valor: 'R$ 50,00'
    },
    {
      descricao: 'Venda',
      valor: 'R$ 3.500,00'
    },
    {
      descricao: 'Manunteção',
      valor: 'R$ 5.000,00'
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
      valor: {
        title: 'Valor',
        type: 'number',
        with: '10%'
      }      
    }
  }
  
}
