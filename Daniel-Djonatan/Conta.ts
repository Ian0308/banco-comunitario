import { Icliente } from "./Icliente";
import { Iconta } from "./Iconta";

export abstract class Conta implements Iconta {
  constructor(
    public numero: number,
    public cliente: Icliente,
    public saldo: number = 0
  ) {}
  deposito(valor: number): void {
    this.saldo += valor;
  }
  tranferir(destino: Iconta, valor: number): boolean {
    if (this.sacar(valor)) {
      destino.deposito(valor);
      return true;
    }
    return false;
  }
  verificarsaldo(): number {
    
      return this.saldo;
    
  }
 
  
  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): boolean {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  transferir(destino: Iconta, valor: number): boolean {
    if (this.sacar(valor)) {
      destino.deposito(valor);
      return true;
    }
    return false;
  }

  verificarSaldo(): number {
    return this.saldo;
  }
}


 
    