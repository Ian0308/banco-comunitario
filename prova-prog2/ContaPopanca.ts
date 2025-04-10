import { Cliente } from './Cliente';
import { Conta } from './Conta';


export class ContaPoupanca extends Conta {
  taxaJuros: number;
  cliente:Cliente;

  constructor(cliente: Cliente, taxaJuros: number = 0.02) { 
    super(cliente);
    this.cliente=cliente;
    this.taxaJuros = taxaJuros;
  }

  calcularTaxa(): void {
    this.saldo += this.saldo * this.taxaJuros;
  }
}
