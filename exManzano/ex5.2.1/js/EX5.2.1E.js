// Descrição   :  Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido


alert("Digite 15 números e veja o total da soma do fatorial de cada um")

let somaFatorial = 0
let contador = 1

do{
   let numero = Number(prompt("Digite um número"))

   if (numero == 0){
      numero = 1
   }
   let fatorial = numero
   let auxiliar = 1

   while (numero > auxiliar){

      fatorial *=auxiliar

      auxiliar++
   }
   somaFatorial +=fatorial
   contador++
} while(contador < 16)

alert("A soma dos fatorais dos números digitados é: "+somaFatorial)