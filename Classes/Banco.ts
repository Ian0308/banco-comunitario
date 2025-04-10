import { Cliente } from "./Cliente";
import { ICliente } from "../Interfaces/ICliente"
import { Conta } from "./Conta";

export class Banco {

    cadastrarCliente(cliente: ICliente): void {
        console.log(`Cliente cadastrado: ${cliente.nome}`)
    }

    criarContaCorrente(cliente: ICliente): void{
        if(cliente.salario>=500){
            console.log(`Conta criada`)
        }
        else{
            console.log(`Não pode criar conta corrente`)
        }
    }

}

