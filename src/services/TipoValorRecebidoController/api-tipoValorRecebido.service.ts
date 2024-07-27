import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { RequestTokenService } from '../request-token.service';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiTipoValorRecebidoService {

  constructor(private http: HttpClient,
    private requestToken: RequestTokenService) {}

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error);
  }

  public GetTipoValorRecebido(): Observable<any>{
    const headers = this.requestToken.createAuthorizationHeader();

    return this.http.get<any>(`${API_URL}/GetTipoValorRecebido`, { headers })
    .pipe(
      catchError(this.handleError)
    )
  }
}
