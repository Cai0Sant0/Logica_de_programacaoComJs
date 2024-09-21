// Descrição   : Ler 3 valores e escrever o maior deles

alert("Digite três números e veja o maior")

let numero1 = Number(prompt("Digite o primeiro número "))


let numero2 = Number(prompt("Digite o segundo número "))

let numero3 = Number(prompt("Digite o terceiro número "))

if (numero1 > numero2 && numero1 > numero3) {
    alert(numero1 + " é o maior número digitado")
}
else
    if (numero2 > numero1 && numero2 > numero3) {
        alert(numero2 + " é o maior número digitado")
    }
    else {
        alert(numero3 + " é o maior número digitado")
    }


