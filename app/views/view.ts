/* Tipando a classe View com um genérico (<T>) permite que, ao herdar ela
podemos passar qual o tipo do dado esperamos como parametro nos metodos
update e template */
export abstract class View<T> {
  // modificador protected atua na herança permitindo que os filhos de View acessem essa propriedade
  // mantendo ela oculta de qualquer instancia
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    this.elemento = document.querySelector(seletor);

    if (escapar) {
      this.escapar = escapar;
    }
  }

  /* Utilizando o modificador protected na classe pai e nas filhas escondemos o método template
  que não precisa ser utilizado pelas instancias das classes filhas */
  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);

    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this.elemento.innerHTML = template;
  }
}