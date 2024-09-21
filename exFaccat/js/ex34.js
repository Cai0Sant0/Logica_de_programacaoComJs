// Descrição   : Fazendo um algoritmo para testes de valores

let x = Number(prompt("Digite um valor:"))

let y = Number(prompt("Digite outro valor:"))

let z = (x * y) + 5
let resposta = ""

if (z <= 0) {
    resposta = "A"
}
else {
    if (z <= 100) {
        resposta = "B"
    }
    else {
        resposta = "C"
    }
}

alert(`${z}  ${resposta}`)
