import { Injectable } from "@angular/core";
import { ApiTipoContasPagasService } from "./api-tipoContasPagas.service";
import { Observable } from "rxjs";
import { TipoContaPaga } from "../../app/shared/Entities/TipoContaPaga";

@Injectable({
  providedIn: 'root'
})
export class NegocioDataTipoContasPagasService {

  constructor(private api: ApiTipoContasPagasService) { }

  public GetTipoContaPaga(): Observable<any>{
    return this.api.GetTipoContaPaga();
  }

  public InsertTipoContaPaga(tipoContasPagas: TipoContaPaga): Observable<any>{
    return this.api.InsertTipoContaPaga(tipoContasPagas);
  }

  public UpdateTipoContaPaga(tipoContasPagas: TipoContaPaga): Observable<any>{
    return this.api.UpdateTipoContaPaga(tipoContasPagas);
  }

  public DeleteTipoContaPaga(tipoContaPagaId: string): Observable<any>{
    return this.api.DeleteTipoContaPaga(tipoContaPagaId);
  }
}
