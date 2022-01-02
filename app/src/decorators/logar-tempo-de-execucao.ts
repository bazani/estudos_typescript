export function logarTempoDeExecucao() {
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

    descriptor.value = function () {
      const t1 = performance.now(); 
      // chama o metodo original
      // metodoOriginal
      const t2 = performance.now();
      console.log(`[${propertyKey}], tempo de execução ${(t2 - t1) / 1000}`);
    };

    return descriptor;
  }
}