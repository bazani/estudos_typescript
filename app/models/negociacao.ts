export class Negociacao {
  constructor(
    private data$: Date,
    private quantidade$: number,
    private valor$: number) {
  }

  get data(): Date {
    // programacao defensiva: nao retorna posicao da memoria da minha propriedade privada
    const data = new Date(this.data$.getTime());
    return data;
  }

  // getter sao propriedades publicas, por isso nao pode ter o mesmo nome de propriedades privadas
  get quantidade(): number {
    return this.quantidade$;
  }

  get valor(): number {
    return this.valor$;
  }

  get volume(): number {
    return this.quantidade$ * this.valor$;
  }
}