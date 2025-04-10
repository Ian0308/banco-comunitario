import { ICliente } from './ICliente';

export class Cliente implements ICliente {
    id: number;
    nome: string;
    endereco: string;
    telefone: string;
    renda: number;

  constructor(id: number, nome: string, endereco: string, telefone: string, renda: number) {
    this.id=id;
    this.nome=nome;
    this.endereco=endereco;
    this.telefone=telefone;
    this.renda=renda;
  }
    
}
