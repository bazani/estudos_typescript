export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = []; //maneira explicita
        this.negociacoes = []; //maneira abreviada
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray omite os metodos que alteram o array
    // lista(): ReadonlyArray<Negociacao> { // maneira explicita
    lista() {
        // jeito javascript de resolver problema de referencia a instancia privada
        // return [...this.negociacoes];
        return [...this.negociacoes];
    }
}
