import { Conta } from './Conta';

export class ContaCorrente extends Conta {
  limiteChequeEspecial: number = 100;

  sacar(valor: number): void {
    if (valor > this.saldo + this.limiteChequeEspecial) {
      console.log("Saldo insuficiente, mesmo com cheque especial.");
    }
    this.saldo -= valor;
  }
}