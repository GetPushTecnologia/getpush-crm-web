import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { ApiTipoValorRecebidoService } from "./api-tipoValorRecebido.service";
import { TipoValorRecebido } from "../../app/shared/Entities/TipoValorRecebido";

@Injectable({
  providedIn: 'root'
})
export class NegocioDataTipoValorRecebidoService {

  constructor(private api: ApiTipoValorRecebidoService) { }

  public GetTipoValorRecebido(): Observable<any>{
    return this.api.GetTipoValorRecebido();
  }

  public InsertTipoValorRecebido(tipoValorRecebido: TipoValorRecebido): Observable<any>{
    return this.api.InsertTipoValorRecebido(tipoValorRecebido);
  }

  public UpdateTipoValorRecebido(tipoValorRecebido: TipoValorRecebido): Observable<any>{
    return this.api.UpdateTipoValorRecebido(tipoValorRecebido);
  }

  public DeleteTipoValorRecebido(tipoValorRecebidoId: string): Observable<any>{
    return this.api.DeleteTipoValorRecebido(tipoValorRecebidoId);
  }
}
