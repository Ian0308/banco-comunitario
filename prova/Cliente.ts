import { ICliente } from "./ICLiente";

export class Cliente implements ICliente{
    nome: string;
    id: number;
    endereco: string;
    telefone: string;
    rendaSalarial: number;

    constructor(nome: string, id:number, endereco:string, telefone:string, rendaSalarial:number){
        this.nome = nome;
        this.id = id;
        this.endereco = endereco;
        this.telefone = telefone;
        this.rendaSalarial = rendaSalarial;
    }
}