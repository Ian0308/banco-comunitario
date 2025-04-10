import { Icliente } from "./Icliente.Ts";


export class Cliente implements Icliente{
nome:string;
id:number;
endereco:string;
telefone:number;
renda:number;
 
constructor(nome:string,id:number,endreco:string,telefone:number,renda:number){
    this.nome=nome;
    this.id=id;
    this.endereco;
    this.telefone=telefone;
    this.renda=renda;


}
    rendasala: number;

}