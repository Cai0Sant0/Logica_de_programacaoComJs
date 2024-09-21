// Descrição   :  Ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escrever o valor a ser pago pelo cliente.

alert("----TABELA DE PREÇO-----")

alert("Maçã")
alert("Até 5kg - 1,80 R$ por Kg")
alert("Mais que 5Kg - 1,50 R$ Kg ")

alert("Morango")
alert("Até 5kg - 2,50 R$ por Kg")
alert("Mais que 5Kg - 2,20 R$ Kg ")

alert("Digite algumas informações e descubra o valor a ser pago!")

let quantidadeMacaEmKg = Number(prompt("Digite a quantiade de Kg que você comprou de maçã: "))

let quantidadeMorangoEmKg = Number(prompt("Digite a quantiade de Kg que você comprou de morango: "))

let quantidadeTotalDeKg = quantidadeMacaEmKg + quantidadeMorangoEmKg

if (quantidadeTotalDeKg >= 8) {
    let valorMaca = quantidadeMacaEmKg * 1.50
    let valorMorango = quantidadeMorangoEmKg * 2.20
    let valorFinal = valorMaca + valorMorango

    alert("Valor da Maçã: R$ " + valorMaca.toFixed(2))
    alert("Valor da Morango: R$ " + valorMorango.toFixed(2))
    alert("Valor final: R$ " + valorFinal.toFixed(2))

    alert("Ganhou 10% de desconto")
    alert(`Valor final com desconto:  R$ ${valorFinal - (valorFinal * 0.10).toFixed(2)}`)
}
else if (quantidadeMacaEmKg <= 5 && quantidadeMorangoEmKg <= 5) {

    let valorMaca = quantidadeMacaEmKg * 1.80
    let valorMorango = quantidadeMorangoEmKg * 2.50
    let valorFinal = valorMaca + valorMorango

    alert("Valor da Maçã: R$ " + valorMaca.toFixed(2))
    alert("Valor da Morango: R$ " + valorMorango.toFixed(2))
    alert("Valor final: R$ " + valorFinal.toFixed(2))
}
else if (quantidadeMacaEmKg <= 5 && quantidadeMorangoEmKg <= 7) {

    let valorMaca = quantidadeMacaEmKg * 1.80
    let valorMorango = quantidadeMorangoEmKg * 2.20
    let valorFinal = valorMaca + valorMorango

    alert("Valor da Maçã: R$ " + valorMaca.toFixed(2))
    alert("Valor da Morango: R$ " + valorMorango.toFixed(2))
    alert("Valor final: R$ " + valorFinal.toFixed(2))
}
else if (quantidadeMacaEmKg <= 7 && quantidadeMorangoEmKg <= 5) {

    let valorMaca = quantidadeMacaEmKg * 1.50
    let valorMorango = quantidadeMorangoEmKg * 2.50
    let valorFinal = valorMaca + valorMorango

    alert("Valor da Maçã: R$ " + valorMaca.toFixed(2))
    alert("Valor da Morango: R$ " + valorMorango.toFixed(2))
    alert("Valor final: R$ " + valorFinal.toFixed(2))
}