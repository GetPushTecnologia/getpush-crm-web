import { Component, Inject, Input } from '@angular/core';
import { NB_WINDOW_CONTEXT, NbDialogRef } from '@nebular/theme';
import { NB_DIALOG_CONFIG } from '@nebular/theme';

@Component({
  selector: 'ngx-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  tipoDados: string;

  constructor(protected ref: NbDialogRef<PopupComponent>,
    @Inject(NB_WINDOW_CONTEXT) context
  ){    
    this.tipoDados = context.text;
  }
  
  fechar(){
   this.ref.close();
  }
}
