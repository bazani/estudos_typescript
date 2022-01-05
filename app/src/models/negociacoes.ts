import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {
  // private negociacoes: Array<Negociacao> = []; //maneira explicita
  private negociacoes: Negociacao[] = []; //maneira abreviada

  constructor() { }

  public adiciona(negociacao: Negociacao):void {
    this.negociacoes.push(negociacao);
  }

  // ReadonlyArray omite os metodos que alteram o array
  // lista(): ReadonlyArray<Negociacao> { // maneira explicita
  public lista(): readonly Negociacao[] { //maneira abreviada
    // jeito javascript de resolver problema de referencia a instancia privada
    // return [...this.negociacoes];
    return [...this.negociacoes];
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }

  public isIgual(objeto: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.lista());
  }
}
