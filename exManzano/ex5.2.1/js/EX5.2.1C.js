// Descrição   : Mostrar todos os valores divisiveis por 4 que sejam menores que 200

console.log("Mostrando todos os valores divisiveis por 4 antes de 200")
console.log("-----------------------------------------------")

let contador = 4;

do {
  if (contador % 4 == 0) {
    console.log(contador)
    console.log("")
  }
  contador++
} while (contador < 200)

console.log("-----------------------------------------------")