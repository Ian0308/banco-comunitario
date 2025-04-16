import { ICliente } from "./ICliente";

export class Cliente implements ICliente{
    nome_completo: string;
    id: number;
    endereco: string;
    telefone: string;
    renda_salarial: number;

    constructor(nome:string, id:number, endereco:string, telefone:string, renda:number){
        this.nome_completo = nome;
        this.id = id;
        this.endereco = endereco;
        this.telefone = telefone;
        this.renda_salarial = renda;
    }
}