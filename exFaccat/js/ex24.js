// Descrição   : Solicitar o salário fixo e o valor de vendas efetuada por um vendendor e colocar uma comissão de 3% para as vendas até 1500 R$ e a mais que isso adicionar 5% ao valor ultrapassado

alert("Digite aqui seu salário fixo e o valor de vendas efetuadas para saber seu salário final")


let salarioFixo = Number(prompt("Escreva seu salário fixo (R$)"))
let valorVendasEfetuadas = Number(prompt("Escreva o valor de vendas efetuadas por você:"))


if (valorVendasEfetuadas <= 1500) {
    let salarioFinal = salarioFixo + valorVendasEfetuadas +(valorVendasEfetuadas *0.03)
   alert("Seu salário final (venda menor que 1500) é de: R$ "+salarioFinal.toFixed(2))
}
else{
   let valorUltrapassado = 1500-valorVendasEfetuadas
   let salarioFinal = salarioFixo + valorVendasEfetuadas +(valorVendasEfetuadas *0.03)+(valorUltrapassado*0.05)
   alert("Seu salário final (venda maior que 1500) é de: R$"+salarioFinal.toFixed(2))
}