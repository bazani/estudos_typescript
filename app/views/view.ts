/* Tipando a classe View com um genérico (<T>) permite que, ao herdar ela
podemos passar qual o tipo do dado esperamos como parametro nos metodos
update e template */
export abstract class View<T> {
  // modificador protected atua na herança permitindo que os filhos de View acessem essa propriedade
  // mantendo ela oculta de qualquer instancia
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  abstract template(model: T): string;

  update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}