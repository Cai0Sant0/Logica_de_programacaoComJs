alert("Escreva dois números e veja sua divisão real")


let dividendo = parseInt(prompt("Digite o dividendo"))

let divisor = parseInt(prompt("Digite o divisor"))



let quociente = 0

do{
   quociente++
   dividendo -= divisor
}while (dividendo > divisor)

alert("O resultado da divisão real é: "+quociente)
