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
  provider: string = '';

  constructor(protected service: NbAuthService,
    private routeReuse: RouteReuseStrategy,
    @Inject(NB_AUTH_OPTIONS) protected config = {},
    protected router: Router,
    ) {
      super(service, config, router);
    // this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
    // this.provider = this.getConfigValue('forms.logout.provider');
  }

  // ngOnInit(): void {
  //   this.logout(this.provider);
  // }

  // logout(provider: string): void {
  //   this.service.logout(provider).subscribe((result: NbAuthResult) => {

  //     const redirect = result.getRedirect();
  //     if (redirect) {
  //       setTimeout(() => {
  //         return this.router.navigateByUrl(redirect);
  //       }, this.redirectDelay);
  //     }
  //   });
  // }
}
