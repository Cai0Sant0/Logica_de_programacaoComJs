// Descrição   : Solitar o custo de fábrica de um carro e calcular o preço adicionando os impostos e o percentual do distribuidor

alert("Escreva o valor de fábrica do carro e veja o preço dele aplicando impostos");
let precoCarro = parseInt(prompt("Digite o valor do carro em R$:"));


let impostos = precoCarro*0.45
let distribuidor = precoCarro*0.28
precoCarro = precoCarro+impostos+distribuidor


alert("O preço total do carro junto com os impostos é de:  R$ "+ precoCarro.toFixed(2))






