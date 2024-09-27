// Descrição   : Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.

console.log("Valor dos fatoriais dos números ímpares situados entre 1 e 10")
console.log("-------------------------------------------------------------")

let fatorial = 0;
let auxiliar = 0;

for(let numero = 1; numero < 11; numero++){
   if(numero%2 == 1){
      fatorial = numero
      auxiliar = 1

      while(numero > auxiliar){
         fatorial *= auxiliar
         auxiliar++
      }

      console.log("O fatorial de "+numero+ " é igual a "+fatorial)
      console.log("")
   }
}
