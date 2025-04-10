import { Cliente } from "./cliente";
import { ContaCorente } from "./ContaCorente";
import { ContaPoupanca } from "./contaPoupança";
import { IConta } from "./IConta";

const c1:Cliente = new Cliente("pedro henrique", 1, "Apiúna", "(47) 99842-3213", 1500);
const c2:Cliente = new Cliente("Alex Santana", 2, "Dalbergia", "(47) 98623-2313", 400);
const c3:Cliente = new Cliente("maria helena", 3, "Lontras", "(47) 99863-7453", 1000);

let cc2:IConta;
if(c2.renda_salarial>=500){
    cc2 = new ContaPoupanca(400, c2, 2);
}else{
    cc2 = new ContaCorente(400, c2);
}

let cc3:ContaPoupanca = new ContaPoupanca(1000, c3, 2);


const cc1:ContaCorente = new ContaCorente(300, c1);
cc1.deposito(1500);
cc1.verificarSaldo();
cc1.saque(10);
cc1.verificarSaldo();
cc1.transferencia(1790, cc2);
cc1.verificarSaldo();
cc2.verificarSaldo();
cc1.sacarChequeEspecial(100);
cc1.verificarSaldo();
console.log(cc1.chequeEspecial);

cc3.verificarSaldo();
cc3.calculoJuros();
cc3.verificarSaldo()