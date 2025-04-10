import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";
import { IConta } from "./IConta";

export class ContaPoupanca implements IConta {
    id: number;
    saldo: number;
    taxaJuros: number;
    cliente : Cliente;

    constructor(id: number, cliente: Cliente) {
        this.id = id;
        this.saldo = 0;
        this.taxaJuros = 0.3;
        this.cliente = cliente;
    }

    deposito(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            let juros: number = this.calculoJuros();
            this.saldo += juros;
            console.log(`Valor de: ${valor} depositado`)
        }
        else {
            console.log("valor inválido")
        }
    }

    saque(valor: number): void {
        if (valor < this.saldo) {
            this.saldo -= valor;
            console.log(`saque de: ${valor} realizado`)
        } else {
            console.log("saldo insuficiente")
        }
    }

    transferenciaP(valor: number, conta: ContaPoupanca): void {
        if (valor < this.saldo) {
            this.saldo -= valor;
            conta.saldo += valor;
            console.log(`tranferência de: ${valor} realizada`);
        }
        else {
            console.log("tranferencia invalida")
        }
    }

    transferenciaC(valor: number, conta: ContaCorrente): void {
        if (valor < this.saldo) {
            this.saldo -= valor;
            conta.saldo += valor;
            console.log(`tranferência de: ${valor} realizada`);
        }
        else {
            console.log("tranferencia invalida")
        }
    }

    verificarSaldo(): void {
        console.log(`saldo: ${this.saldo}`)
    }

    calculoJuros(): number {
        return this.saldo * this.taxaJuros;
    }
}