import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);
console.log('data definida: %s', negociacao.data);
console.log('volume negociado: %d', negociacao.volume);