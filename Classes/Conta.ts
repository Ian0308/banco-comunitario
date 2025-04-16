import { IConta } from "../Interfaces/IConta"
import { Cliente } from "./Cliente";

export class Conta implements IConta{
    constructor(
    public saldo: number
    public tipo: "corrente" | "poupanca"
    public cliente: ICliente
    public taxaJuros: number = 0.02
    ){}
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
        if(conta.tipo == "Corrente"){
            let limite = conta.saldo + 100
            if(quantia <= limite){
                conta.saldo -= quantia
                console.log(`Saque de R$${quantia} realizado. Saldo: R$${conta.saldo}`)
            }else{
                console.log(`Pode não fi, quer ficar devendo?`)
            }
        }
        if(conta.tipo == "Poupanca"){
            if(quantia <= conta.sald){
                conta.saldo -= quantia
                console.log(`Saque de R$${quantia} realizado. Saldo: R$${conta.saldo}`)
            }else{
                console.log(`Pode não fi, quer ficar endividado?`)
            }
            
        }
    }

    transferir(quantia: number, destino: Conta): void {
    if (
      (conta.tipo == "corrente" && quantia <= conta.saldo + 100) ||
      (conta.tipo == "poupanca" && quantia <= conta.saldo)
    ) {
      conta.sacar(quantia);
      destino.depositar(quantia);
      console.log(`Transferência de R$${quantia} para a conta ${destino.cliente}`);
    } else {
      console.log("Transferência não realizada.");
    }
  }

    verificarSaldo(): number {
    console.log(`Saldo atual da conta: R$${conta.saldo}`);
    return this.saldo;
  }

    calcularTaxa(taxaJuros:number, conta: IConta){
        console.log(conta.saldo * taxaJuros) 
    }

     calcularTaxa(): void {
    if (conta.tipo == "poupanca") {
      let juros = conta.saldo * conta.taxaJuros;
      conta.saldo += juros;
      console.log(`Juros aplicados.`);
    } else {
      console.log("Conta corrente não possui cálculo de juros.");
    }
  }

}
