import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbWindowService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { TipoRecebiveisComponent } from '../tipo-recebiveis/tipo-recebiveis.component';
import { PopupComponent } from '../../popup/popup/popup.component';

@Component({
  selector: 'ngx-recebiveis',
  templateUrl: './recebiveis.component.html',
  styleUrls: ['./recebiveis.component.scss']
})
export class RecebiveisComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  constructor(private windowService: NbWindowService) {}

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

  addTipoRecebiveis() {
    // this.dialogService.open(PopupComponent, {
    //   context: {
    //     // title: 'This is a title passed to the dialog component',
    //   },
    // });

    this.windowService.open(PopupComponent,
      { 
        title: 'Teste', 
        context: { 
          text: 'Dividendos' 
        } 
      },
    );
  }
}
