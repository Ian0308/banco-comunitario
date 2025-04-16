import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    constructor(
      numero: number,
      cliente: any,
      saldo: number = 0,
      public taxaJuros: number = 0.02
    ) {
      super(numero, cliente, saldo);
    }
  
    calcularTaxa(): void {
      this.saldo += this.saldo * this.taxaJuros;
    }
  }
  