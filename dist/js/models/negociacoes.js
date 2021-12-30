export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray omite os metodos que alteram o array
    lista() {
        // jeito javascript de resolver problema de referencia a instancia privada
        // return [...this.negociacoes];
        return [...this.negociacoes];
    }
}
