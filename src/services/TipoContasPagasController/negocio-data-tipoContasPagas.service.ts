import { Injectable } from "@angular/core";
import { ApiTipoContasPagasService } from "./api-tipoContasPagas.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NegocioDataTipoContasPagasService {

  constructor(private api: ApiTipoContasPagasService) { }

  public GetTipoContaPaga(): Observable<any>{
    return this.api.GetTipoContaPaga();
  }
}
