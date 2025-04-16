let cliente1 = new Cliente(1, "João Silva", "Rua 1", "1111-1111", 1000)
let cliente2 = new Cliente(2, "Maria Santos", "Rua 2", "2222-2222", 400)

let conta1 = new Conta("corrente", cliente1) 
let conta2 = new Conta("poupanca", cliente2)

conta1.depositar(500)
conta1.sacar(550)
conta1.verificarSaldo()

conta2.depositar(300)
conta2.calcularTaxa()
conta2.verificarSaldo()

conta1.transferir(50, conta2);
conta2.verificarSaldo()
