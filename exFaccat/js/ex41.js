// Descrição: Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação. Calcular a média de aproveitamento

alert("Escreva suas três notas e a média dos exercícios e veja a média final (notas de 0 a 10)")
let nota1 = Number(prompt("Primeira nota: "))

let nota2 = Number(prompt("Segunda nota: "))

let nota3 = Number(prompt("Terceira nota: "))

let mediaDosEx = Number(prompt("Média dos exercícios: "))



let mediaDeAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaDosEx) / 7

if (mediaDeAproveitamento < 6) {
    alert("Nota D")
}
else if (mediaDeAproveitamento >= 6 && mediaDeAproveitamento < 7.5) {
    alert("Nota C")
}
else if (mediaDeAproveitamento >= 7.5 && mediaDeAproveitamento < 9) {
    alert("Nota B")
}
else {
    alert("Nota A")
}
