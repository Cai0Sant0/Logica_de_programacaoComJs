// Descrição   : Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.


console.log("Veja a soma de todos os números pares entre 1 e 500")
console.log("---------------------------------------------------")

let contador = 0
let numeroPar = 0

do {
  contador++
  if (contador % 2 == 0) {
    numeroPar += contador
  }
}
while (contador < 501)

console.log("A soma dos números pares é: " + numeroPar)