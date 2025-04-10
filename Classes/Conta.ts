import { IConta } from "../Interfaces/IConta"
import { Cliente } from "./Cliente";

export class Conta implements IConta{
    constructor(public saldo: number,public tipo: "Corrente" | "Poupanca" = "Poupanca", cliente: Cliente){
        this.saldo = saldo
        this.tipo = tipo
    }

    realizarDeposito(conta: IConta, quantia: number){
        if(conta.tipo = "Corrente"){
            conta.saldo += quantia
        }
        if(conta.tipo = "Poupanca"){
            conta.saldo += quantia
        }
    }

    realizarSaque(conta: IConta, quantia: number){
        if(conta.tipo = "Corrente"){
            if(conta.saldo < quantia){
                console.log(`Pode não fi, quer ficar devendo?`)    
            }else{
                conta.saldo -= quantia
            }
        }
        if(conta.tipo = "Poupanca"){
            if(conta.saldo < quantia){
                console.log(`Pode não fi, quer ficar endividado?`)
            }else{
                conta.saldo -= quantia
            }
            
        }
    }

    transferir(conta: IConta, quantia: number){
        if(conta.tipo == "Corrente" && "Poupanca"){
            if(quantia > conta.saldo){
                console.log("É mais dinheiro do que você tem")
            }else{
                console.log("Pode transferir")
            }
        }else{
            console.log("Não pode transferir")
        }
    }

    calcularTaxa(taxaJuros:number, conta: IConta){
        console.log(conta.saldo * taxaJuros) 
    }

}