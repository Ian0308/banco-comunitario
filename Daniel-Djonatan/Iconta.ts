import { Icliente } from "./Icliente";


export interface Iconta{
numero:number;
cliente:Icliente;
saldo:number;
deposito(valor:number):void;
sacar(valor:number):boolean;
tranferir(destino:Iconta,valor:number):boolean;
verificarsaldo():number;


}


