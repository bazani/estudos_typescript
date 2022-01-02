export class Negociacao {
    constructor(data$, quantidade$, valor$) {
        this.data$ = data$;
        this.quantidade$ = quantidade$;
        this.valor$ = valor$;
    }
    get data() {
        const data = new Date(this.data$.getTime());
        return data;
    }
    get quantidade() {
        return this.quantidade$;
    }
    get valor() {
        return this.valor$;
    }
    get volume() {
        return this.quantidade$ * this.valor$;
    }
    static criaDe(dataS, quantidadeS, valorS) {
        const exp = /-/g;
        const data = new Date(dataS.replace(exp, ','));
        const quantidade = parseInt(quantidadeS);
        const valor = parseFloat(valorS);
        return new Negociacao(data, quantidade, valor);
    }
}
