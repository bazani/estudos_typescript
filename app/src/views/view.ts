import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

/* Tipando a classe View com um genérico (<T>) permite que, ao herdar ela
podemos passar qual o tipo do dado esperamos como parametro nos metodos
update e template */
export abstract class View<T> {
  // modificador protected atua na herança permitindo que os filhos de View acessem essa propriedade
  // mantendo ela oculta de qualquer instancia
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);

    if (elemento) {
      this.elemento = document.querySelector(seletor) as HTMLElement;
    } else {
      throw new Error(`Seletor ${seletor} não existe no DOM. Verifique o nome do seletor antes de continuar.`);
      
    }
  }

  /* Utilizando o modificador protected na classe pai e nas filhas escondemos o método template
  que não precisa ser utilizado pelas instancias das classes filhas */
  protected abstract template(model: T): string;

  @logarTempoDeExecucao(true)
  @inspect
  public update(model: T): void {
    let template = this.template(model);

    this.elemento.innerHTML = template;
  }
}