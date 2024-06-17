import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {
  
  source: LocalDataSource = new LocalDataSource();

  constructor(){    
  }

  ngOnInit(): void {
    this.source.load(this.data);
  }
  
  data = [{
    cep: '03210-001',
    logradouro: 'Rua costa Barros',
    numero: 1985,
    complemento: 'Bloco 15 apto 44',    
    estado: 'Sao Paulo',
    cidade: 'SP'
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
        type: 'string',
        with: '16%'
      },
      logradouro: {
        title: 'Logradouro',
        type: 'string',
        with: '20%'
      },
      numero: {
        title: 'Nr',
        type: 'number',
        with: '10%'
      },
      complemento: {
        title: 'Complemento',
        type: 'string',
        with: '18%'
      },      
      cidade: {
        title: 'Cidade',
        type: 'string',
        with: '16%'
      },
      estado: {
        title: 'Estado',
        type: 'string',
        with: '16.6%'
      },
    }
  }

}
