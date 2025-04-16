import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
    private limiteChequeEspecial: number = 100;
  
    sacar(valor: number): boolean {
      if (this.saldo + this.limiteChequeEspecial >= valor) {
        this.saldo -= valor;
        return true;
      }
      return false;
    }
  }
  
