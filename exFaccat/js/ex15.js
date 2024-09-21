// Descrição   : Solicitar um valor e ver se é positivo ou negativo

alert("Digite um número e veja se ele é par ou impar");

let numero = parseInt(prompt("Digite um número"))

if (numero % 2 == 0) {
    alert(`${numero} é par`)
}
else {
    alert(`${numero} é impar`)
}
