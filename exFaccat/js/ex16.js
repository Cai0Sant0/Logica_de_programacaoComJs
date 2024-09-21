// Descrição   : Solicitar o número de maçãs e calcular o preço final

alert("TABELA DE PREÇOS")

alert("Menos que meia dúzia de maças, 1,30R$ cada")
alert("Meia dúzia de maças ou mais, 1,00R$ cada")

let quantidadeMaca = parseInt(prompt("Quantas maças deseja comprar? "));


if (quantidadeMaca < 6) {
    let precoFinalMaca = quantidadeMaca * 1.30
    alert("O preço final é de  R$ " + precoFinalMaca.toFixed(2))
}
else {
    alert("O preço final é de R$ "+ quantidadeMaca.toFixed(2))
}