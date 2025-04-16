import { Cliente } from "./Cliente";
import { IConta } from "./IConta";

export class ContaPoupanca implements IConta{
    saldo: number;
    cliente: Cliente;
    taxaJuros: number;

    constructor(saldo:number, cliente:Cliente, taxaJuros:number){
        this.saldo = saldo;
        this.cliente = cliente;
        this.taxaJuros = taxaJuros;
    }

    transferencia(valor: number, IConta:IConta): void {
        if(this.saldo < valor){
            console.log("Saldo insuficiente");
        }
        else{
            this.saldo -= valor;
            IConta.saldo += valor;
        }
    }

    deposito(valor: number): void {
        this.saldo += valor;
        console.log("Deposito efetuado");    
    }

    saque(valor: number): void {
        if(this.saldo < valor){
            console.log("Saldo insuficiente");
        }
        else{
            this.saldo -= valor;
            console.log("Saque efetuado");
        }
    }

    verificarSaldo(): void {
        console.log("O saldo é de: R$" + this.saldo);
    }

    calculoJuros(){
        this.saldo = this.saldo + (this.saldo * this.taxaJuros/100);
    }
}