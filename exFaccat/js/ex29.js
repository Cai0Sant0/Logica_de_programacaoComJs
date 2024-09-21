// Descrição   : Ler 3 valores e somar os dois maiores

alert("Digite três números a soma dos dois maiores")

let numero1 = parseInt(prompt("Digite o primeiro número: "))


let numero2 = parseInt(prompt("Digite o segundo número: "))

let numero3 = parseInt(prompt("Digite o terceiro número: "))

if (numero1 > numero3 && numero2 > numero3) {
    let soma = numero1 + numero2
    alert("A soma dos  dois maiores números é: " + soma)
}
else {
    if (numero2 > numero1 && numero3 > numero1) {
        let soma = numero2 + numero3
        alert("A soma dos  dois maiores números é: " + soma)
    }
    else {
        let soma = numero1 + numero3
        alert("A soma dos  dois maiores números é: " + soma)
    }

}