import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthResult, NbAuthService, NbLogoutComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class NgxLogoutComponent extends NbLogoutComponent implements OnInit {
  redirectDelay: number = 0;
  provider: string = 'email';

  constructor(
    // protected service: NbAuthService,
    // private routeReuse: RouteReuseStrategy,

    private authService: NbAuthService,
    protected router: Router,
    @Inject(NB_AUTH_OPTIONS) protected config = {},
    ) {
      super(authService, config, router);
    // this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
    // this.provider = this.getConfigValue('forms.logout.provider');
  }

  ngOnInit(): void {
    this.logout(this.provider);
  }


  // logout() : void {
  //   this.authService.logout('email').subscribe(res => {
  //     res.isSuccess() && this.router.navigate(['/login']);
  //   })
  // }
  logout(provider: string): void {
    this.authService.logout(provider).subscribe((result: NbAuthResult) => {
      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
    });
  }
}
