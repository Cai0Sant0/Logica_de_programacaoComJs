// Descrição   : Montando Triângulos

let a = Number(prompt("Digite um valor: "))

let b = Number(prompt("Digite um valor: "))

let c = Number(prompt("Digite um valor: "))

let mensagem = ""

if (a < b + c && b < a + c && c < a + b) {
    if (a == b && b == c) {
        mensagem = "Triângulo Equilátero"
    }
    else if (a == b || b == c || a == c) {
        mensagem = "Triângulo Isósceles"
    }
    else {
        mensagem = "Triângulo Escaleno"
    }
}
else {
    mensagem = "Não e possível formar um triângulo"
}

alert(mensagem)