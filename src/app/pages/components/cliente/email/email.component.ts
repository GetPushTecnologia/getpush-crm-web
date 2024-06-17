import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  constructor(){}

  ngOnInit(): void {
    this.source.load(this.data);
  }

  data = [
    {
      email: 'juniorbx@gmail.com',
      observacao: 'E-mail do comprador'
    },
    {
      email: 'bruna_santhy26@hotmail.com',
      observacao: 'E-mail da esposa do comprador'
    }
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
      email: {
        title: 'Telefone',
        type: 'string',
        with: '16%'
      },
      observacao: {
        title: 'Observação',
        type: 'number',
        with: '10%'
      }      
    }
  }
}
