export class TipoContaPaga {
  id: string;
  code: number;
  descricao: string;

  constructor(values: {
    id: string,
    code: number,
    descricao: string
  }) {
    this.id = values.id;
    this.code = values.code;
    this.descricao = values.descricao;
  }

}
