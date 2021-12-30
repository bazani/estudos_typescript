export class Negociacao {
  private data$: Date;
  private quantidade$: number;
  private valor$: number;

  constructor(data: Date, quantidade: number, valor: number) {
    this.data$ = data;
    this.quantidade$ = quantidade;
    this.valor$ = valor;
  }

  get data(): Date {
    return this.data$;
  }

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