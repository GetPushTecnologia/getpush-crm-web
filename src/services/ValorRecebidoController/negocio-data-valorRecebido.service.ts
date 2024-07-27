import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiValorRecebidoService } from "./api-valorRecebido.service";

@Injectable({
  providedIn: 'root'
})
export class NegocioDataValorRecebidoService {

  constructor(private api: ApiValorRecebidoService) { }

  public GetValorRecebido(): Observable<any>{
    return this.api.GetValorRecebido();
  }
}
