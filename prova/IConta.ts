import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

export interface IConta{
    id: number;
    saldo: number;

    deposito(valor: number): void;
    saque(valor: number): void;
    transferenciaP(valor:number, conta: ContaPoupanca): void;
    transferenciaC(valor:number, conta: ContaCorrente): void;
    verificarSaldo(): void;
}
