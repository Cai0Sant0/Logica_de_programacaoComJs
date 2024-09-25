// Descrição   : Convertendo  graus celsius para Fahrenheit de 10 em 10

console.log("Convertendo temperaturas")
console.log("")

let celsius = 10
let fahrenheit = 0

while (celsius < 101) {
   fahrenheit = (9*celsius+160)/5
   console.log(celsius+" °C é igual a "+fahrenheit+ "°F" )
   celsius+=10
}
