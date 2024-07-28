import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { RequestTokenService } from '../request-token.service';
import { TipoContaPaga } from '../../app/shared/Entities/TipoContaPaga';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiTipoContasPagasService {

  constructor(private http: HttpClient,
    private requestToken: RequestTokenService
  ) {}

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error);
  }

  public GetTipoContaPaga(): Observable<any>{
    const headers = this.requestToken.createAuthorizationHeader();

    return this.http.get<any>(`${API_URL}/GetTipoContaPaga`, { headers })
    .pipe(
      catchError(this.handleError)
    )
  }

  public InsertTipoContaPaga(tipoContasPagas: TipoContaPaga): Observable<any>{
    const headers = this.requestToken.createAuthorizationHeader();

    return this.http.post<any>(`${API_URL}/InsertTipoContaPaga`, tipoContasPagas, { headers })
    .pipe(
      catchError(this.handleError)
    )
  }

  public UpdateTipoContaPaga(tipoContasPagas: TipoContaPaga): Observable<any>{
    const headers = this.requestToken.createAuthorizationHeader();

    return this.http.put<any>(`${API_URL}/UpdateTipoContaPaga`, tipoContasPagas, { headers })
    .pipe(
      catchError(this.handleError)
    )
  }

  public DeleteTipoContaPaga(tipoContaPagaId: string): Observable<any>{
    const headers = this.requestToken.createAuthorizationHeader();

    return this.http.delete<any>(`${API_URL}/DeleteTipoContaPaga/${tipoContaPagaId}`, { headers })
    .pipe(
      catchError(this.handleError)
    )
  }
}
