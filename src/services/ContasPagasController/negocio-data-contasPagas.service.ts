import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiContasPagasService } from "./api-contasPagas.service";

@Injectable({
  providedIn: 'root'
})
export class NegocioDataContasPagasService {

  constructor(private api: ApiContasPagasService) { }

  public GetContasPagas(): Observable<any>{
    return this.api.GetContasPagas();
  }
}
