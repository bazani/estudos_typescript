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

  /* metodos static sao metodos da classe, que podem ser acessados sem a necessidade
  de instanciar a classe antes */
  public static criaDe(dataS: string, quantidadeS: string, valorS: string): Negociacao {
    const exp = /-/g;
    const data = new Date(dataS.replace(exp, ','));
    const quantidade = parseInt(quantidadeS);
    const valor = parseFloat(valorS);

    return new Negociacao(
      data,
      quantidade,
      valor
    );
  }
}