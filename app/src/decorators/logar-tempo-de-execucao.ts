export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    /**
     * Ao adicionar o decorator em um método estatico, o target é o construtor da classe
     * que contem o método estático.
     * Ao adicionar o decorator em um método não estático, o target vai ser preenchido com o
     * prototype da classe em questão.
     */
    target: any,
    /**
     * Possui o nome do método com o qual anotamos o nosso decorator.
     */
    propertyKey: string,
    /**
     * Possui uma referencia direta ao método anotado com o decorator.
     */
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let divisor = 1;
      let unidade = 'milisegundos';

      if (emSegundos) {
        divisor = 1000;
        unidade = 'segundos';
      }

      const t1 = performance.now(); 
      // chama o metodo original passando o contexto original (this)
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`[${propertyKey}], tempo de execução ${(t2 - t1) / divisor} ${unidade}.`);
      return retorno;
    };

    return descriptor;
  }
}