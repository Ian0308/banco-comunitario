import{IConta} from "./IConta";
import { ICliente } from './ICliente';

export class Conta implements IConta {
  static contador = 1;
   numero: number;
   saldo: number = 0;

  constructor(public cliente: ICliente) {
    this.numero = Conta.contador++;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  saque(valor: number): void {
    if (valor > this.saldo) 
      console.log("Saldo insuficiente.");
    this.saldo -= valor;
  }

  transfere(destino: IConta, valor: number): void {
    this.saque(valor);
    destino.depositar(valor);
  }

  verificarSaldo(): number {
    return this.saldo;
  }
}