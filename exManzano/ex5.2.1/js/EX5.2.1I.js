// Descrição   :Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.

let menorValor = 0
let maiorValor = 0
let numero = 0

alert("Digite um número negativo para acabar")

   do{
      
      numero = Number(prompt("Digite um número "))

      if (maiorValor < numero) {
         maiorValor = numero
      }

      if (menorValor > numero) {
         menorValor = numero
      }

   }while(numero > -1 )

   alert("O maior número digitado é: "+maiorValor)
   alert("O menor número digitado é: "+menorValor)