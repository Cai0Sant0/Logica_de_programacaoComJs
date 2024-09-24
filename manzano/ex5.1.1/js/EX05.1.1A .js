// Descrição   : Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

console.log("====================TABUADA=====================")
   alert("Digite um número qualquer e descubra sua tabuada (Resultado no console)")
   let numero = parseInt(prompt("Digite o número"))
   console.log("Tabuada do ", numero)

    let contador = 1

   while(contador < 11){
    console.log(numero+" x "+contador+" = "+numero*contador)
    contador++
   } 
