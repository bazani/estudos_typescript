export class Negociacao {
    constructor(data$, quantidade$, valor$) {
        this.data$ = data$;
        this.quantidade$ = quantidade$;
        this.valor$ = valor$;
    }
    get data() {
        // programacao defensiva: nao retorna posicao da memoria da minha propriedade privada
        const data = new Date(this.data$.getTime());
        return data;
    }
    // getter sao propriedades publicas, por isso nao pode ter o mesmo nome de propriedades privadas
    get quantidade() {
        return this.quantidade$;
    }
    get valor() {
        return this.valor$;
    }
    get volume() {
        return this.quantidade$ * this.valor$;
    }
    /* metodos static sao metodos da classe, que podem ser acessados sem a necessidade
    de instanciar a classe antes */
    static criaDe(dataS, quantidadeS, valorS) {
        const exp = /-/g;
        const data = new Date(dataS.replace(exp, ','));
        const quantidade = parseInt(quantidadeS);
        const valor = parseFloat(valorS);
        return new Negociacao(data, quantidade, valor);
    }
}
