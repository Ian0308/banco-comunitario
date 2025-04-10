import { Cliente } from "./cliente";
import { IConta } from "./IConta";

export class ContaCorente implements IConta{
    saldo: number;
    cliente: Cliente;
    chequeEspecial:number = 100;

    constructor(saldo:number, cliente:Cliente){
        this.saldo = saldo;
        this.cliente = cliente
    }

    transferencia(valor: number, IConta:IConta): void {

        if(this.saldo < valor){
            console.log("Saldo insuficiente");
        }
        else{
            this.saldo -= valor;
            IConta.saldo += valor
        }
    }

    verificarSaldo(): void {
        console.log("O saldo é de: R$" + this.saldo);
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

    sacarChequeEspecial(valor:number){
        if(this.saldo == 0){
            if(valor<=this.chequeEspecial){
                this.chequeEspecial -= valor;
                this.saldo += valor;
                console.log("Sucesso ao sacar");
            }else{
                console.log("Erro no saque");
            }
        }else{
            console.log("Erro no saque");
        }
    }
}