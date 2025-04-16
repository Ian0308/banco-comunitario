import { ICliente } from "./ICliente";
 
 export class Cliente implements ICliente{
     nomeCompleto: string;
     id: number;
     endereco: string;
     numeroTelefone: string;
     rendaSalarial: number;
 
     constructor(nomeCompleto: string, id: number, endereco: string, numeroTelefone: string, rendaSalarial: number){
         this.nomeCompleto = nomeCompleto;
         this.id = id;
         this.endereco = endereco;
         this.numeroTelefone = numeroTelefone;
         this.rendaSalarial = rendaSalarial;
     }
     
 }