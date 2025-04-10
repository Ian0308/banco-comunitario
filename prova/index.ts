import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";


const cliente1 = new Cliente ("Cleidin Silva", 1, "casa", "123", 1000);

const cliente2 = new Cliente ("Cezar Menote", 2, "rua", "1234", 10);

const contaP = new ContaPoupanca(2, cliente2);
let contaC: ContaCorrente;
if(cliente1.rendaSalarial > 500){
    contaC = new ContaCorrente (1, cliente1);
    contaC.deposito(100);
    contaC.saque(20);
    contaC.transferenciaP(10, contaP);
    contaC.verificarSaldo();
}else{
    console.log("não deu")
}


contaP.deposito(300);
contaP.verificarSaldo();
contaP.saque(100);
contaP.verificarSaldo();



