import { TipoContaPaga } from "./TipoContaPaga";
import { TipoValorRecebido } from "./TipoValorRecebido";

export class ValorRecebido {
  id: string;
  descricao: string;
  tipoValorRecebido: TipoValorRecebido;
  data_recebimento: Date;
  valor: number;

  constructor(values: {
    id: string,
    descricao: string,
    tipoValorRecebido: TipoContaPaga,
    data_recebimento: Date,
    valor: number
  }) {

    this.id = values.id;
    this.descricao = values.descricao;
    this.tipoValorRecebido = values.tipoValorRecebido;
    this.data_recebimento = values.data_recebimento;
    this.valor = values.valor;
  }
}
