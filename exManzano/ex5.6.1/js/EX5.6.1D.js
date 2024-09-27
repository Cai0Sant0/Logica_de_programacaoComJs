// Descrição   : Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

console.log("Veja a soma de todos os números pares entre 1 e 500")
console.log("---------------------------------------------------")

let numeroPar = 0

for(let contador = 1; contador < 501; contador++){
   if(contador %2 == 0){
      numeroPar += contador
   }
}

console.log("")
console.log("A soma é igual a: "+numeroPar)