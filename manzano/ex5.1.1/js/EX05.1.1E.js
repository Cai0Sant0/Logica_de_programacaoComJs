// Descrição   :Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio.

console.log("Exponenciação na base 3 ate o expoente 15")
console.log("--------------------------------------------")

let numeroBase = 3
let auxiliar = 0
let expoente = 0

while(expoente < 16){
   if (expoente == 0) {
      auxiliar = 1
   }
   if (expoente == 1) {
      auxiliar = numeroBase
   }

   console.log(numeroBase+" elevado a "+ expoente+ " é igual a: "+auxiliar)
   console.log("")
   
   
   auxiliar *= numeroBase
   expoente ++
}



