// Descrição   :  Ler um valor e ver se é postivo, negativo ou zero

let numero = Number(prompt("Digite um número e veja se é positivo, negativo ou zero"))

if (numero == 0) {
    alert("Número é zero")
}
else {
    if (numero >= 1) {
        alert(numero+ " é positivo")
    }
    else {
        alert(numero+ " é negativo")
    }
}