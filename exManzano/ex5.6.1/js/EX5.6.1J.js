// Descrição   : Convertendo  graus celsius para Fahrenheit de 10 em 10

console.log("Convertendo temperaturas")
console.log("")

let fahrenheit = 0

for (let celsius = 10; celsius < 101; celsius += 10) {
   fahrenheit = (9 * celsius + 160) / 5
   console.log(celsius + " °C é igual a " + fahrenheit + "°F")
}