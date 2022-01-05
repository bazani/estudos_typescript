import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

  @domInjector('#data')
  private inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private inputValor: HTMLInputElement;

  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemVew = new MensagemView('#mensagemView');

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  @inspect
  @logarTempoDeExecucao()
  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if (!this.isDiaUtil(negociacao.data)) {
      this.mensagemVew.update('Apenas negociações em dias úteis são aceitas.');
      return;
    } 

    this.negociacoes.adiciona(negociacao);
    this.limparFormulario();
    this.atualizaView();
  }

  public importaDados(): void {
    const api = 'http://localhost:8080/dados';

    fetch(api)
      .then(resp => resp.json())
      .then((dados: any[]) => {
        return dados.map(dado => {
          return new Negociacao(new Date(), dado.vezes, dado.montante);
        });
      })
      .then((dadosNegociacoes: Negociacao[]) => {
        for(let negocio of dadosNegociacoes) {
          this.negociacoes.adiciona(negocio);
        }
        this.atualizaView();
      })
      .catch(err => {
        throw new Error(`Não foi possível acessar a api: ${api}`);
      });
  }

  private isDiaUtil(data: Date): boolean {
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
  }

  private limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';  

    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemVew.update('Negociação adicionada com sucesso.');
  }
}