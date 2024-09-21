// Descrição   : Solicitar a quantidade atual do estoque, a quantidade máxima e a mínima de um produto, calcular a quantidade média se esse valor for maior que a do estoque exibir Não efetuar compra senão exibir efetuar compra

alert("Digite algumas informações e veja se o produto está disponível para venda!")

let estoqueAtual = parseInt(prompt("Digite a quantidade atual do produto em estoque"))


let estoqueMaximo = parseInt(prompt("Digite a quantidade máxima permitida do produto no estoque"))


let estoqueMinimo = parseInt(prompt("Digite a quantidade mínima permitida do produto no estoque"))


let mediaEstoque = (estoqueMaximo + estoqueMinimo) / 2

if (estoqueAtual >= mediaEstoque) {
    alert("NÃO EFETUAR COMPRA!!!")
}
else {
    alert("EFETUAR COMPRA!!!")
}
