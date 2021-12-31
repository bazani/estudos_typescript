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
}
