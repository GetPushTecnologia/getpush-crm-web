import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { RequestTokenService } from '../request-token.service';
import { ContaPaga } from '../../app/shared/Entities/ContaPaga';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiContaPagaService {

  constructor(private http: HttpClient,
    private requestToken: RequestTokenService
  ) {}

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error);
  }

  public GetContaPaga(): Observable<any>{
    const headers = this.requestToken.createAuthorizationHeader();

    return this.http.get<any>(`${API_URL}/GetContaPaga`, { headers })
    .pipe(
      catchError(this.handleError)
    )
  }

  public InsertContaPaga(contaPaga: ContaPaga): Observable<any>{
    const headers = this.requestToken.createAuthorizationHeader();

    return this.http.post<any>(`${API_URL}/InsertContaPaga`, contaPaga, { headers })
    .pipe(
      catchError(this.handleError)
    )
  }

  public UpdateContaPaga(contaPaga: ContaPaga): Observable<any>{
    const headers = this.requestToken.createAuthorizationHeader();

    return this.http.put<any>(`${API_URL}/UpdateContaPaga`, contaPaga, { headers })
    .pipe(
      catchError(this.handleError)
    )
  }

  public DeleteContaPaga(contaPagaId: string): Observable<any>{
    const headers = this.requestToken.createAuthorizationHeader();

    return this.http.delete<any>(`${API_URL}/DeleteContaPaga/${contaPagaId}`, { headers })
    .pipe(
      catchError(this.handleError)
    )
  }
}
