import { View } from "./view.js";
export class NegociacoesView extends View {
    template(listaNegociacoes) {
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
                <td>${this.formata(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
              </tr>
            `;
        }).join('')}
        </tbody>
      </table>
    `;
    }
    formata(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
