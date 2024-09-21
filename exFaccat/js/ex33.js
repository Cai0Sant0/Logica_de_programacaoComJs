// Descrição   : Ler 2 valores e ver se são iguais ou o 1° maior que o 2° ou e vice-versa

alert("Digite dois números")

let numero1 = Number(prompt("Digite o 1° número:"))

let numero2 = Number(prompt("Digite o 2° número:"))


if (numero1 == numero2) {
    alert(numero1+ " é igual a "+ numero2)
}
else {
    if (numero1 > numero2) {
        alert(numero1+ " é maior que "+ numero2)
    }
    else {
        alert(numero2+ " é maior que "+ numero1)
    }
}