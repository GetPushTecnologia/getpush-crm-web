import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiGraficoService } from "./api-grafico.service";
import { ContaPaga } from "../../app/shared/Entities/ContaPaga";

@Injectable({
  providedIn: 'root'
})
export class NegocioDataGraficoService {

  constructor(private api: ApiGraficoService) { }

  public GetDadosGraficoResumido(): Observable<any>{
    return this.api.GetDadosGraficoResumido();
  }

  public GetDadosGraficoLinhaTempo(): Observable<any>{
    return this.api.GetDadosGraficoLinhaTempo();
  }
}
