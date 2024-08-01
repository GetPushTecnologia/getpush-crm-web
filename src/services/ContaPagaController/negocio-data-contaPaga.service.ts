import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiContaPagaService } from "./api-contaPaga.service";
import { ContaPaga } from "../../app/shared/Entities/ContaPaga";

@Injectable({
  providedIn: 'root'
})
export class NegocioDataContaPagaService {

  constructor(private api: ApiContaPagaService) { }

  public GetContaPaga(): Observable<any>{
    return this.api.GetContaPaga();
  }

  public InsertContaPaga(contaPaga: ContaPaga): Observable<any>{
    return this.api.InsertContaPaga(contaPaga);
  }

  public UpdateContaPaga(contaPaga: ContaPaga): Observable<any>{
    return this.api.UpdateContaPaga(contaPaga);
  }

  public DeleteContaPaga(contaPagaId: string): Observable<any>{
    return this.api.DeleteContaPaga(contaPagaId);
  }
}
