import { ExtraOptions, RouterModule, Routes, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  // NbLoginComponent,
  // NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { NgxLoginComponent } from './@theme/components/auth/login/login.component';
import { NgxLogoutComponent } from './@theme/components/auth/logout/logout/logout.component';
import { AuthGuard } from './auth-guard.service';

export const routes: Routes = [

  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NgxLoginComponent,
      },
      {
        path: 'login',
        component: NgxLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NgxLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
      data: { shouldReuse: false }
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full', data: { shouldReuse: false } },
  { path: '**', redirectTo: 'auth', data: { shouldReuse: false } },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
