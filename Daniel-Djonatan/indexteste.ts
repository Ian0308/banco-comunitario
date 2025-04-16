import { Cliente } from "./Cliente";
import { ContaCorrente } from "./Contacorrente";
import { ContaPoupanca } from "./ContaPoupanca";

const cliente1 = new Cliente(1, "Ana Souza", "Rua A, 123", "99999-0000", 600);


let conta1;
if (cliente1.renda >= 500) {
  conta1 = new ContaCorrente(101, cliente1);
}

const conta2 = new ContaPoupanca(102, cliente1);

conta1?.depositar(300);
conta2.depositar(200);

conta1?.transferir(conta2, 100);


conta2.calcularTaxa();

console.log(conta1?.verificarSaldo()); 
console.log(conta2.verificarSaldo()); 
