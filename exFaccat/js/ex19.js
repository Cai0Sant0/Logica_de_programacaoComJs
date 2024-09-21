// Descrição   : Solicitar dois valores e descobrir o maior

alert("Digite dois números e veja o maior")
let numero01 = parseInt(prompt("Digite um número"))
let numero02 = parseInt(prompt("Digite um número: "))

if (numero01 > numero02) {
    alert(numero01+" é maior que "+ numero02)
}
else {
    alert(numero02+ " é maior que "+ numero01)
}