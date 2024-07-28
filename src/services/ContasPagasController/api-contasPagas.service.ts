import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { RequestTokenService } from '../request-token.service';
import { ContasPagas } from '../../app/shared/Entities/ContasPagas';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiContasPagasService {

  constructor(private http: HttpClient,
    private requestToken: RequestTokenService
  ) {}

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error);
  }

  public GetContasPagas(): Observable<any>{
    const headers = this.requestToken.createAuthorizationHeader();

    return this.http.get<any>(`${API_URL}/GetContasPagas`, { headers })
    .pipe(
      catchError(this.handleError)
    )
  }

  public InsertContasPagas(contasPagas: ContasPagas): Observable<any>{
    const headers = this.requestToken.createAuthorizationHeader();

    return this.http.post<any>(`${API_URL}/InsertContasPagas`, contasPagas, { headers })
    .pipe(
      catchError(this.handleError)
    )
  }

  public UpdateContasPagas(contasPagas: ContasPagas): Observable<any>{
    const headers = this.requestToken.createAuthorizationHeader();

    return this.http.put<any>(`${API_URL}/UpdateContasPagas`, contasPagas, { headers })
    .pipe(
      catchError(this.handleError)
    )
  }

  public DeleteContasPagas(contaPagaId: string): Observable<any>{
    const headers = this.requestToken.createAuthorizationHeader();

    return this.http.delete<any>(`${API_URL}/DeleteContasPagas/${contaPagaId}`, { headers })
    .pipe(
      catchError(this.handleError)
    )
  }
}
