import { AfterViewInit, Component } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

@Component({
  selector: 'ngx-custom-editor-date',
  templateUrl: './custom-editor-date.component.html',
  styleUrls: ['./custom-editor-date.component.scss']
})
export class CustomEditorDateComponent extends DefaultEditor implements AfterViewInit {
  constructor() {
    super();
  }

  ngAfterViewInit() {
    if (this.cell.newValue !== '') {
      //TODO:
    }
  }
}
