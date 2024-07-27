import { AfterViewInit, Component } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

@Component({
  selector: 'ngx-custom-editor-moeda',
  templateUrl: './custom-editor-moeda.component.html',
  styleUrls: ['./custom-editor-moeda.component.scss']
})
export class CustomEditorMoedaComponent extends DefaultEditor implements AfterViewInit {

  constructor() {
    super();
  }

  ngAfterViewInit() {
    if (this.cell.newValue !== '') {
      //TODO:
    }
  }
}
