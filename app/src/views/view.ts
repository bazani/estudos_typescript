/* Tipando a classe View com um genérico (<T>) permite que, ao herdar ela
podemos passar qual o tipo do dado esperamos como parametro nos metodos
update e template */
export abstract class View<T> {
  // modificador protected atua na herança permitindo que os filhos de View acessem essa propriedade
  // mantendo ela oculta de qualquer instancia
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);

    if (elemento) {
      this.elemento = document.querySelector(seletor) as HTMLElement;
    } else {
      throw new Error(`Seletor ${seletor} não existe no DOM. Verifique o nome do seletor antes de continuar.`);
      
    }

    if (escapar) {
      this.escapar = escapar;
    }
  }

  /* Utilizando o modificador protected na classe pai e nas filhas escondemos o método template
  que não precisa ser utilizado pelas instancias das classes filhas */
  protected abstract template(model: T): string;

  public update(model: T): void {
    const t1 = performance.now();
    let template = this.template(model);

    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this.elemento.innerHTML = template;
    const t2 = performance.now();

    console.log(`Tempo de execução do método update: ${(t2 - t1) / 1000} segundos`);
  }
}