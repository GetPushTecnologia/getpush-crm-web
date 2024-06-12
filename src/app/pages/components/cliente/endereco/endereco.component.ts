import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent {

  source: LocalDataSource = new LocalDataSource();

  constructor(){
    this.source.load(this.data);
  }

  data = [{
    cep: '03210-001',
    logradouro: 'Rua costa Barros',
    numero: 1985,
    complemento: 'Bloco 15 apto 44',    
    estado: 'Sao Paulo',
    cidade: 'Sao Paulo'
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
      cep: {
        title: 'CEP',
        type: 'string'
      },
      logradouro: {
        title: 'Logradouro',
        type: 'string'
      },
      numero: {
        title: 'Número',
        type: 'number'
      },
      complemento: {
        title: 'Complemento',
        type: 'string'
      },
      estado: {
        title: 'Estado',
        type: 'string'
      },
      cidade: {
        title: 'Cidade',
        type: 'string'
      }
    }
  }
}
