import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-telefone',
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.scss']
})
export class TelefoneComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  constructor(){}

  ngOnInit(): void {
    this.source.load(this.data);
  }

  data = [
    {
      telefone: '(11) 98614-9055',
      tipoTelefone: 'Recado',
      observacao: 'Telefone da casa do cliente'    
    },
    {
      telefone: '(11) 98614-9055',
      tipoTelefone: 'WhatsApp',
      observacao: 'WhatsApp do cliente'
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
      telefone: {
        title: 'Telefone',
        type: 'string',
        with: '16%'
      },
      tipoTelefone: {
        title: 'Tipo Telefone',
        type: 'string',
        with: '20%'
      },
      observacao: {
        title: 'Observação',
        type: 'number',
        with: '10%'
      }      
    }
  }
}
