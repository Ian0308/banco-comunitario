import { Cliente } from './Cliente';
import { ContaCorrente } from './ContaCorrente';
import { ContaPoupanca } from './ContaPopanca';


const cliente1 = new Cliente(1, "João Silva", "Rua A, 123", "99999-0000", 1200);
const cliente2 = new Cliente(2, "Maria Souza", "Rua B, 456", "98888-1111", 300);


const conta1 = new ContaCorrente(cliente1);
const conta2 = new ContaPoupanca(cliente2);


console.log(`Conta Corrente criada: ${conta1.numero} - Cliente: ${conta1.cliente.nome}`);
console.log(`Conta Poupança criada: ${conta2.numero} - Cliente: ${conta2.cliente.nome}`);

conta1.depositar(500);
conta2.depositar(1000);

console.log("Saldo conta1:", conta1.verificarSaldo());
console.log("Saldo conta2:", conta2.verificarSaldo());

conta1.transfere(conta2, 200);
console.log("Conta1:", conta1.verificarSaldo());
console.log("Conta2:", conta2.verificarSaldo());

(conta2 as ContaPoupanca).calcularTaxa();
console.log("Saldo conta2 após juros:", conta2.verificarSaldo());
