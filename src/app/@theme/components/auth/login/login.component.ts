import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { NB_AUTH_OPTIONS, NbAuthResult, NbAuthService, NbAuthSocialLink, NbLoginComponent, getDeepFromObject } from "@nebular/auth";

@Component({
    selector: 'ngx-login',
    templateUrl: './login.component.html'
  })
  export class NgxLoginComponent extends NbLoginComponent {

    // redirectDelay: number = 0;
    // showMessages: any = {};
    // provider: string = '';

    // errors: string[] = [];
    // messages: string[] = [];
    user: any = {};
    // submitted: boolean = false;
    // socialLinks: NbAuthSocialLink[] = [];
    // hide = true;
    // outputPath: string;

    // constructor(protected service: NbAuthService,
    //             @Inject(NB_AUTH_OPTIONS) protected config = {},
    //             protected router: Router,
    //             private location: Location) {

    //   this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    //   this.showMessages = this.getConfigValue('forms.login.showMessages');
    //   this.provider = this.getConfigValue('forms.login.provider');
    //   this.socialLinks = this.getConfigValue('forms.login.socialLinks');

    //   if (window.location.href.includes("rc.wssoft")){
    //     window.location.href = 'https://renosoft.com.br/';
    //   }
    // }

    // login(): void {
    //   this.errors = this.messages = [];
    //   this.submitted = true;

    //   this.service.authenticate(this.provider, this.user).subscribe((result: NbAuthResult) => {
    //     this.submitted = false;

    //     if (result.isSuccess()) {
    //       let response = result.getResponse();
    //       let user = response.body.user;
    //       this.messages = result.getMessages();

    //       //return this.router.navigateByUrl('auth/cadastrar-senha');

    //     } else {
    //       this.errors = result.getErrors();
    //     }

    //     const redirect = result.getRedirect();
    //     if (redirect) {
    //       setTimeout(() => {
    //         return this.router.navigateByUrl(redirect);
    //       }, this.redirectDelay);
    //     }
    //   });
    // }

    // getConfigValue(key: string): any {
    //   return getDeepFromObject(this.config, key, null);
    // }
  }
