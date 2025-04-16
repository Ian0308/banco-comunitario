import { ICliente } from "../Interfaces/ICliente"

export class Cliente implements ICliente{
    
    constructor(public nome: String, public id: number, public endereco: String, public telefone: String, public salario: number){
        this.nome = nome
        this.id = id
        this.endereco = endereco
        this.telefone = telefone
        this.salario = salario
    }
}
