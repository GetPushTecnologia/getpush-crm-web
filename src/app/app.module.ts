/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbButtonModule,
  NbChatModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule,
  NbInputModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { NgxLoginComponent } from './@theme/components/auth/login/login.component';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { NgxLogoutComponent } from './@theme/components/auth/logout/logout/logout.component';
import { AuthGuard } from './auth-guard.service';

const API_URL = environment.apiUrl;

const COMPONENTS = [
  AppComponent,
  NgxLoginComponent,
  NgxLogoutComponent
]
const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};

@NgModule({
  providers: [
    AuthGuard
  ],
  declarations: [COMPONENTS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NbButtonModule,
    NbInputModule,
    NbCheckboxModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: API_URL,
          login: {
            endpoint: '/auth/sing-in',
             method: 'post',
             redirect: {
              success: 'pages',
              failure: null, // stay on the same page
            },
          },
          logout: {
              endpoint: '/auth/sign-out',
              method: 'post',
              redirect: {
                success: 'login',
                failure: null, // stay on the same page
              },
            },
          token: {
            class: NbAuthJWTToken,
            key: 'token', // this parameter tells where to look for the token
          },
        },
      )
      ],

      // providers: {
      //   email: {
      //     // service: NbEmailPassAuthProvider,
      //     config: {
      //       baseEndpoint: API_URL,
      //       login: {
      //         endpoint: '/auth/sign-in',
      //         method: 'post',
      //       },
      //       logout: {
      //         endpoint: '/auth/sign-out',
      //         method: 'post',
      //       },
      //       token: {
      //         key: 'token',
      //       },
      //     },
      //   },
      //},
      forms: {
          login: formSetting,
        // register: formSetting,
        // requestPassword: formSetting,
        // resetPassword: formSetting,
        logout: {
          redirectDelay: 0,
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
