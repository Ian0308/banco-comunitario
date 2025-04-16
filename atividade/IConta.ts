import { Cliente } from "./Cliente";

export interface IConta{
    saldo:number;
    cliente:Cliente;

    deposito(valor:number):void;
    saque(valor:number):void;
    verificarSaldo():void;
    transferencia(valor:number, iConta:IConta):void
}