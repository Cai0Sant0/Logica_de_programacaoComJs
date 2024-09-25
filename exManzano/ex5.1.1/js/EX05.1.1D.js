// Descrição   :Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.



console.log("Números impares entre 0 e 20")

let contador = 0
let numeroPar = 0

while (contador < 20){
   contador++
   if(contador%2 == 1){
      console.log("")
      console.log(contador)
   }
}



