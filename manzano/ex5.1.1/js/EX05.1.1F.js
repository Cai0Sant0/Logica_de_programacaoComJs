// Descrição   :Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^)


alert("EXPONENCIAÇÃO")

let base = parseInt(prompt("Digite o valor da base: "))

let expoente = parseInt(prompt("Digite o valor do expoente: "))

 let potencia = 1
 let contador = 0

while (contador != expoente) {
   potencia *= base
   contador++
}

alert(base+" elevado a "+expoente+" é igual a "+potencia)