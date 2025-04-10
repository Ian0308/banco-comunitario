import { Cliente } from "./Cliente";
import { ContaPoupanca } from "./ContaPoupanca";
import { IConta } from "./IConta";

export class ContaCorrente implements IConta{
    id: number;
    saldo: number;
    limiteCheque: number;
    cliente : Cliente;

    constructor(id:number, cliente: Cliente){
        this.id = id;
        this.saldo = 0;
        this.limiteCheque = 100;
        this.cliente = cliente;
    }

    deposito(valor: number): void{
        if(valor>0){
            this.saldo+=valor;
            console.log(`Valor de: ${valor} depositado`)
        }
        else{
            console.log("valor inválido")
        }
    }
    saque(valor:number): void{
        if(valor<this.saldo){
            this.saldo-=valor
            console.log(`Valor de: ${valor} sacado. Restam ${this.saldo} reais na conta`);
        }else if(valor<(this.saldo+this.limiteCheque)){
            valor -= this.saldo;
            this.saldo = 0;
            this.limiteCheque -=valor;
            console.log(`valor de: ${valor} sacado. utilizando cheque especial`);
        }else{
            console.log("Saldo e limite de cheque insuficientes");
        }

    }
    transferenciaP(valor:number, conta:ContaPoupanca): void{
        if(valor<this.saldo){
            this.saldo-=valor;
            conta.saldo+=valor;
            console.log(`tranferência de: ${valor} realizada`);
        }else if (valor<(this.saldo+this.limiteCheque)){
            conta.saldo+=valor;
            valor -= this.saldo;
            this.saldo = 0;
            this.limiteCheque -=valor;
            console.log(`tranferencia de: ${valor} realizada com uso de cheque especial`);
        }else{
            console.log("saldo e limite insuficiente");
        }
    }
    transferenciaC(valor:number, conta:ContaCorrente): void{
        if(valor<this.saldo){
            this.saldo-=valor;
            conta.saldo+=valor;
            console.log(`tranferência de: ${valor} realizada`);
        }else if (valor<(this.saldo+this.limiteCheque)){
            conta.saldo+=valor;
            valor -= this.saldo;
            this.saldo = 0;
            this.limiteCheque -=valor;
            console.log(`tranferencia de: ${valor} realizada com uso de cheque especial`);
        }else{
            console.log("saldo e limite insuficiente");
        }
    }
    verificarSaldo(): void{
        console.log(`saldo: ${this.saldo}`)
    }
}