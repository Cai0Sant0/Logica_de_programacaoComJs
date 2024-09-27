// Descrição   : Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.

console.log("números ímpares entre 0 e 20")
console.log("-----------------------------")


for (let contador = 0; contador < 21; contador++) {
   if (contador % 2 == 1) {
      console.log(contador)
      console.log("")
   }
}
