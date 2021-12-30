import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  constructor() {}

  adiciona(negociacao: Negociacao):void {
    this.negociacoes.push(negociacao);
  }

  // ReadonlyArray omite os metodos que alteram o array
  lista(): ReadonlyArray<Negociacao> {
    // jeito javascript de resolver problema de referencia a instancia privada
    // return [...this.negociacoes];
    return [...this.negociacoes];
  }

}