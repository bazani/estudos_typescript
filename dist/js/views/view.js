/* Tipando a classe View com um genérico (<T>) permite que, ao herdar ela
podemos passar qual o tipo do dado esperamos como parametro nos metodos
update e template */
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
