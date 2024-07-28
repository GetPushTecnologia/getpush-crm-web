import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiContasPagasService } from "./api-contasPagas.service";
import { ContasPagas } from "../../app/shared/Entities/ContasPagas";

@Injectable({
  providedIn: 'root'
})
export class NegocioDataContasPagasService {

  constructor(private api: ApiContasPagasService) { }

  public GetContasPagas(): Observable<any>{
    return this.api.GetContasPagas();
  }

  public InsertContasPagas(contasPagas: ContasPagas): Observable<any>{
    return this.api.InsertContasPagas(contasPagas);
  }

  public UpdateContasPagas(contasPagas: ContasPagas): Observable<any>{
    return this.api.UpdateContasPagas(contasPagas);
  }

  public DeleteContasPagas(contaPagaId: string): Observable<any>{
    return this.api.DeleteContasPagas(contaPagaId);
  }
}
