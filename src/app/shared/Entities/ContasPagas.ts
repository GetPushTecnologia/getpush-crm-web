import { TipoContaPaga } from "./TipoContaPaga";

export class ContasPagas {
  id: string;
  descricao: string;
  tipoContaPaga: TipoContaPaga;
  data_pagamento: Date;
  valor: number;

  constructor(values: {
    id: string,
    descricao: string,
    tipoContaPaga: TipoContaPaga,
    data_pagamento: Date,
    valor: number
  }) {

    this.id = values.id;
    this.descricao = values.descricao;
    this.tipoContaPaga = values.tipoContaPaga;
    this.data_pagamento = values.data_pagamento;
    this.valor = values.valor;
  }
}
