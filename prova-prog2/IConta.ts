import { ICliente } from "./ICliente";

export interface IConta {
    numero: number;
    cliente: ICliente;
    saldo: number;

    depositar(valor: number): void;
    sacar(valor: number): boolean;
    transferir(contaDestino: IConta, valor: number): boolean;
    verificarSaldo(): number;
}

