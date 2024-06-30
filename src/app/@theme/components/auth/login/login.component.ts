import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { NB_AUTH_OPTIONS, NbAuthResult, NbAuthService, NbAuthSocialLink, getDeepFromObject } from "@nebular/auth";

@Component({
    selector: 'ngx-login',
    template: `
      <nb-auth-block>
        <h2 class="title">Entrar</h2>
        <small class="form-text sub-title">Olá! Entre com seu email e senha</small>
  
        <form (ngSubmit)="login()" autocomplete="nope">
  
          <div *ngIf="showMessages.error && errors && errors.length > 0 && !submitted"
               class="alert alert-danger" role="alert">
            <div><strong>Algo errado!</strong></div>
            <div *ngFor="let error of errors">{{ error }}</div>
          </div>
  
          <div *ngIf="showMessages.success && messages && messages.length > 0 && !submitted"
               class="alert alert-success" role="alert">
            <div><strong>Sucesso!</strong></div>
            <div *ngFor="let message of messages">{{ message }}</div>
          </div>
  
          <div class="form-group">
            <label for="input-email" class="sr-only">Email</label>
            <input name="email" id="input-email" pattern=".+@.+\..+"
                   class="form-control" placeholder="Email"
                   
                   [required]="getConfigValue('forms.validation.email.required')">
            <small class="form-text error" >
              O Email é necessário!
            </small>
            <small class="form-text error"
                   >
              O Email precisa ser válido!
            </small>
          </div>
  
          <div class="form-group">
  
                <label for="input-password" class="sr-only">Password</label>
                <input matInput name="password" [type]="hide ? 'password':'text'" id="input-password"
                      class="form-control" placeholder="Senha" 
                      
                      [required]="getConfigValue('forms.validation.password.required')"
                      
                      >
                      <a routerLink="" matSuffix (click)="hide = !hide">
                      {{ hide ? 'Mostrar senha' :'Ocultar senha'}}
                      </a>
                <small class="form-text error" >
                  A Senha é necessária!
                </small>
                <small
                  class="form-text error"
                  >
                  A senha precisa ter
                  from {{ getConfigValue('forms.validation.password.minLength') }}
                  to {{ getConfigValue('forms.validation.password.maxLength') }}
                  caracteres
                </small>
          </div>
          <div class="row">
            <div class="col-md-6">
                <!-- <nb-checkbox name="rememberMe">Lembrar de mim</nb-checkbox> -->
            </div>
          </div>
          <button [disabled]="submitted" class="btn btn-block btn-hero-success"
                  [class.btn-pulse]="submitted">
            Entrar
          </button>
          <div class="links">
            <h4><a routerLink="../request-password">Esqueceu a senha!</a></h4>
            </div>
        </form>
        <br/>
        <div class="alert alert-warning" role="alert" hidden="true">
          Atenção: Esse link será descontinuado no dia 08/12/2023.<br/>
          Novo link: <a href="http://www.renosoft.com.br" target="_blank">www.renosoft.com.br</a>
        </div>
      </nb-auth-block>
    `,
  })
  export class NbLoginComponent {
  
    redirectDelay: number = 0;
    showMessages: any = {};
    provider: string = '';
  
    errors: string[] = [];
    messages: string[] = [];
    user: any = {};
    submitted: boolean = false;
    socialLinks: NbAuthSocialLink[] = [];
    hide = true;
    outputPath: string;
  
    constructor(protected service: NbAuthService,
                @Inject(NB_AUTH_OPTIONS) protected config = {},
                protected router: Router,
                private location: Location) {
  
      this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
      this.showMessages = this.getConfigValue('forms.login.showMessages');
      this.provider = this.getConfigValue('forms.login.provider');
      this.socialLinks = this.getConfigValue('forms.login.socialLinks');
  
      if (window.location.href.includes("rc.wssoft")){
        window.location.href = 'https://renosoft.com.br/';
      }
    }
  
    login(): void {
      this.errors = this.messages = [];
      this.submitted = true;
  
      this.service.authenticate(this.provider, this.user).subscribe((result: NbAuthResult) => {
        this.submitted = false;
  
        if (result.isSuccess()) {
          let response = result.getResponse();
          let user = response.body.user;
          this.messages = result.getMessages();
  
          //return this.router.navigateByUrl('auth/cadastrar-senha');
  
        } else {
          this.errors = result.getErrors();
        }
  
        const redirect = result.getRedirect();
        if (redirect) {
          setTimeout(() => {
            return this.router.navigateByUrl(redirect);
          }, this.redirectDelay);
        }
      });
    }
  
    getConfigValue(key: string): any {
      return getDeepFromObject(this.config, key, null);
    }
  }