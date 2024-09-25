// Descrição   : Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100)

console.log("Veja aqui a soma dos 100 primeiros números")

let contador = 1
let somadora = 0


while (contador < 101){
   somadora += contador
   contador++
}

console.log("")
console.log("a soma dos números inteiros até 100 é igual a: "+somadora)



