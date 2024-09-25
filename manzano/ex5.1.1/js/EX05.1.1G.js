// Descrição   : Sequência de Fibonacci

console.log("Sequência de Fibonacci")
console.log("")

let penultimo = -1
let ultimo = 1
let contador = 0
let auxiliar = 0


while (contador < 14) {
   auxiliar =penultimo+ultimo
   penultimo = ultimo
   ultimo = auxiliar

   console.log(auxiliar)
   console.log("")
   contador++

}
