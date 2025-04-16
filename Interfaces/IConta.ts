export interface IConta{
    saldo: number
    tipo: "Corrente" | "Poupanca"
    conta: ICliente
    depositar(valor: number): void;
    sacar(valor: number): void;
    transferir(valor: number, destino: Conta): void;
    verificarSaldo(): number;
    calcularTaxa?(): void;
}
