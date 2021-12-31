import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // private negociacoes: Array<Negociacao> = []; //maneira explicita
  private negociacoes: Negociacao[] = []; //maneira abreviada

  constructor() {}

  adiciona(negociacao: Negociacao):void {
    this.negociacoes.push(negociacao);
  }

  // ReadonlyArray omite os metodos que alteram o array
  // lista(): ReadonlyArray<Negociacao> { // maneira explicita
  lista(): readonly Negociacao[] { //maneira abreviada
    // jeito javascript de resolver problema de referencia a instancia privada
    // return [...this.negociacoes];
    return [...this.negociacoes];
  }

}