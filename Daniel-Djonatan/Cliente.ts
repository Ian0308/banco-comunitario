import { Icliente } from "./Icliente";

  export class Cliente implements Icliente{
    
    constructor(
        public id: number,
        public nome: string,
        public endereco: string,
        public telefone: string,
        public renda: number
      ) {}

    
    }


  
