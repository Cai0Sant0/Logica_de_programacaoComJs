// Descrição   : Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.


console.log("Veja a soma de todos os números pares entre 1 e 500")

let contador = 0
let numeroPar = 0

while (contador < 500){
   contador++
   if(contador%2 == 0){
      numeroPar += contador
   }
}

console.log("")

console.log(`A soma dos númros pares de 1 a 500 é igual a ${numeroPar}`)



