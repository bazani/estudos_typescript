import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private elemento: HTMLLIElement;

  constructor(selector: string) {
    this.elemento = document.querySelector(selector);
  }

  template(listaNegociacoes: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${listaNegociacoes.lista().map(negociacao => {
            return `
              <tr>
                <td>${negociacao.data}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  }

  update(listaNegociacoes: Negociacoes): void {
    this.elemento.innerHTML = this.template(listaNegociacoes);
  }
}