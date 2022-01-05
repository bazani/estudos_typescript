import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  public obterNegociacoes(): Promise<Negociacao[]> {
    const api = 'http://localhost:8080/dados';

    return fetch(api)
      .then(resp => resp.json())
      .then((dados: NegociacaoDoDia[]) => {
        return dados.map(dado => {
          return new Negociacao(new Date(), dado.vezes, dado.montante);
        });
      })
      .catch(err => {
        throw new Error(`Não foi possível acessar a api: ${api}`);
      });
  }
}
