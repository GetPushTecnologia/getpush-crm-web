import { Component, ViewEncapsulation } from "@angular/core";
import { NbLoginComponent } from "@nebular/auth";

@Component({
    selector: 'ngx-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
    encapsulation: ViewEncapsulation.None
  })
  export class NgxLoginComponent extends NbLoginComponent {

    provider: string = '';

    user: any = {};
    hide = true;

    onFocus(event: FocusEvent): void {
      (event.target as HTMLElement).blur(); // Remove o foco do botão
    }

  }
