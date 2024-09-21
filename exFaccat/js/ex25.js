// Descrição   : Ler o número da conta do cliente , saldo, débito e crédito e testar se o saldo está negativo ou positivo

alert("Digite o número da sua conta, saldo, crédito e débito para saber seu saldo atual!")

let contaDoCliente = Number(prompt("Digite o número da conta"))


let saldo = Number(prompt("Digite seu saldo atual "))

let debito = Number(prompt("Digite o seu débito "))

let credito = Number(prompt("Digite o seu crédito "))

let saldoAtual = saldo - debito + credito



if (saldoAtual < 0) {
    alert("Número da conta: " + contaDoCliente)
    alert("SALDO NEGATIVO!!!")
    alert("Saldo Atual: R$ " + saldoAtual.toFixed(2))
}
else {
    alert("Número da conta: " + contaDoCliente)
    alert("SALDO POSITIVO!!!")
    alert("Saldo Atual:  R$ " + saldoAtual.toFixed(2))
}