import { Cliente } from "./Cliente";


export class Contacorrente implements Cliente{
    renda: number;
    id: number;
    nome: string;
    endereco: string;
    rendasala: number;
    telefone: number;
    saque:number;
    verificarsaldo:number;
    disponivel:number= 500;
    
   public Deposito(){
       
        return this.renda-this.saque;
   }


   public Saque(){
if(this.disponivel >= -100){
return this.saque - this.renda;
}
    
   }


   public tranferenciu(){
 if(this.nome == this.nome){
    return this.disponivel - this.saque;
 }

   }

   public Verificarsaldo(){
    console.log(this.disponivel);

   }
}



export class poupanca implements Cliente{
    nome: string;
    id: number;
    endereco: string;
    telefone: number;
    renda: number;
    rendasala: number;
deposito:number;
saque:number;
tranferencia;number;
verificarsaldo:number;
calculojuros:number;

public Calculartaxas(){
return this.renda
 + this.calculojuros;

}

public Deposito(){
       
    return this.renda - this.saque;
}


public Saque(){
if(this.renda >0){
return this.renda - this.saque;
}

}


public tranferenciu(){
if(this.nome == this.nome){
    if(this.tranferencia>0){
        return this.renda + this.tranferencia;
    }else{
        return this.renda - this.tranferencia;
    }




}

}

public Verificarsaldo(){
console.log(this.renda);

}

}


