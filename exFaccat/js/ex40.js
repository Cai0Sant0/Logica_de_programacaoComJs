// Descrição   : Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto)

alert("Digite algumas informações e descubra o desconto no produto!")

let nomeProduto = prompt("Digite o nome do produto: ")

let quantidadeAdquirida = parseInt(prompt("Digite a quantidade que pegou do produto: "))

let precoUnitario = Number(prompt("Digite o valor unitário do produto (R$): "))


let total = quantidadeAdquirida * precoUnitario

if (quantidadeAdquirida <= 5) {

    let totalComDesconto = total - (total * 0.02)

    alert("Produto: " + nomeProduto)
    alert("Você ganhou um desconto de 2%")

    alert("Total: R$ " + total.toFixed(2))
    alert("Desconto: R$ " + (total * 0.02).toFixed(2))
    alert("Total com desconto: R$ " + totalComDesconto.toFixed(2))
}
else if (quantidadeAdquirida > 5 && quantidadeAdquirida <= 10) {
    let totalComDesconto = total - (total * 0.03)

    alert("Produto: " + nomeProduto)
    alert("Você ganhou um desconto de 3%")

    alert("Total: R$ " + total.toFixed(2))
    alert("Desconto: R$ " + (total * 0.03).toFixed(2))
    alert("Total com desconto: R$ " + totalComDesconto.toFixed(2))
}
else {
    let totalComDesconto = total - (total * 0.05)

    alert("Produto: " + nomeProduto)
    alert("Você ganhou um desconto de 5%")

    alert("Total: R$ " + total.toFixed(2))
    alert("Desconto: R$ " + (total * 0.05).toFixed(2))
    alert("Total com desconto: R$ " + totalComDesconto.toFixed(2))
}