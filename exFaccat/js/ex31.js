// Descrição   : Ler 3 valores e ver se é possível formar um triângulo

alert("Digite três números e veja se é possível formar um triângulo com os vlores do lado")

let lado1 = Number(prompt("Digite o valor do primeiro lado "))

let lado2 = Number(prompt("Digite o valor do segundo lado"))

let lado3 = Number(prompt("Digite o valor do terceiro lado "))


if (lado1 + lado2 < lado3 || lado1 + lado3 < lado2 || lado2 + lado3 < lado1) {
    alert("Não pode ser triângulo")
}
else {
    alert("Pode ser triângulo")
}