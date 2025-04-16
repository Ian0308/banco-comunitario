export interface IConta{ 
    saldo: number;

    deposito(valorDepositar: number):void;
    saque(valorSacar: number):void;
    transferencia(valorTrasferir: number, cliente2: IConta):void;
    verificarsaldo():void;
}