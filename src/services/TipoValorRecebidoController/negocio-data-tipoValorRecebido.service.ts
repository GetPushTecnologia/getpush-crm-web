import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { ApiTipoValorRecebidoService } from "./api-tipoValorRecebido.service";

@Injectable({
  providedIn: 'root'
})
export class NegocioDataTipoValorRecebidoService {

  constructor(private api: ApiTipoValorRecebidoService) { }

  public GetTipoValorRecebido(): Observable<any>{
    return this.api.GetTipoValorRecebido();
  }
}
