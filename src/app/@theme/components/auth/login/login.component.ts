import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { NB_AUTH_OPTIONS, NbAuthResult, NbAuthService, NbAuthSocialLink, NbLoginComponent, getDeepFromObject } from "@nebular/auth";

@Component({
    selector: 'ngx-login',
    templateUrl: './login.component.html'
  })
  export class NgxLoginComponent extends NbLoginComponent {

    provider: string = '';

    user: any = {};
    hide = true;

  }
