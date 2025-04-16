import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPopanca";
import { Cliente } from "./Cliente";
 
 let gabriel = new Cliente("Gabriel", 1, "Rua 60", "98765432", 1450)
 let lucas = new Cliente("Lucas", 2, "madeiras", "12345678", 4500)
 let matheus = new Cliente("matheus", 3, "rua 100", "96100159", 500)
 
 let lucasPoupanca = new ContaPoupanca(2, lucas, 1000)
 let matheusPoupanca = new ContaPoupanca(2, matheus, 300)
 let gabrielPoupanca = new ContaPoupanca(2, gabriel, 4000)
 
 if (matheus.rendaSalarial >= 500){
     let matheusCorrente = new ContaCorrente(matheus, 760)
 }
 else{
     console.log("Erro, renda insuficiente")
 }
 
 if (gabriel.rendaSalarial >= 500){
     console.log("Sucesso ao cadastrar a conta gabriel na conta corrente")
     let gabrielCorrente = new ContaCorrente(gabriel, 760);
     lucasPoupanca.transferencia(20000, gabrielCorrente);
     gabrielCorrente.sacarChequeEspecial(80)
 }
 else{
     console.log("Erro, renda insuficiente")
 }
 
 matheusPoupanca.deposito(9000);
 matheusPoupanca.transferencia(4000, lucasPoupanca)
 
 lucasPoupanca.saque(2000)
 lucasPoupanca.calcularTaxa()
 lucasPoupanca.verificarsaldo()