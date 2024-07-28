import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiValorRecebidoService } from "./api-valorRecebido.service";
import { ValorRecebido } from "../../app/shared/Entities/ValorRecebido";

@Injectable({
  providedIn: 'root'
})
export class NegocioDataValorRecebidoService {

  constructor(private api: ApiValorRecebidoService) { }

  public GetValorRecebido(): Observable<any>{
    return this.api.GetValorRecebido();
  }

  public InsertValorRecebido(valorRecebido: ValorRecebido): Observable<any>{
    return this.api.InsertValorRecebido(valorRecebido);
  }

  public UpdateValorRecebido(valorRecebido: ValorRecebido): Observable<any>{
    return this.api.UpdateValorRecebido(valorRecebido);
  }

  public DeleteValorRecebido(valorRecebidoId: string): Observable<any>{
    return this.api.DeleteValorRecebido(valorRecebidoId);
  }
}
