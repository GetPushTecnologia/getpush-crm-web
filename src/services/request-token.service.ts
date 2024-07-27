import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";

@Injectable({
  providedIn: 'root'
})
export class RequestTokenService {

  private token: NbAuthJWTToken = null;

  constructor(private authService: NbAuthService) { }

  createAuthorizationHeader(): HttpHeaders {
    this.authService.onTokenChange()
    .subscribe((token: NbAuthJWTToken) => {

      if (token.isValid()) {
        this.token = token; // here we receive a payload from the token and assigns it to our `user` variable
      }
    });

    return new HttpHeaders().set('Authorization', this.token.toString());
  }
}
