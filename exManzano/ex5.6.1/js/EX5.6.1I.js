// Descrição   : Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
//Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
//pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
//valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
//é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.

console.log("Sequência de Fibonacci")
console.log("")

let penultimo = -1
let ultimo = 1
let auxiliar = 0

for (let contador = 0; contador < 14; contador++) {
   auxiliar = penultimo + ultimo
   penultimo = ultimo
   ultimo = auxiliar

   console.log(auxiliar)
}