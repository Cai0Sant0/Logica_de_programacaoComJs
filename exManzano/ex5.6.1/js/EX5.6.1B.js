// Descrição   : Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

console.log("================TABUADA================")
   alert("Digite um número qualquer e descubra sua tabuada (resposta no console)")
   let numero = parseInt(prompt("Digite o número"))
   console.log("Tabuada do "+ numero)

   for(let contador = 1; contador <11; contador++){
    console.log(numero+" x "+contador+" = "+numero*contador)
   }