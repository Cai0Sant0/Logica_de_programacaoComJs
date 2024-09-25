// Descrição   : Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70

console.log("Soma e média aritmética dos valores pares entre 50 a 70")
console.log("---------------------------------------------------------")

let contador = 50
let soma = 0
let quantidadePares = 0
let media = 0

while (contador < 71) {

    if (contador % 2 == 0) {
        soma+= contador
        quantidadePares++
    }
    contador++
}

media = soma / quantidadePares

console.log("A soma é igual a: "+ soma)
console.log("A média aritmética é igual a: "+ media)

