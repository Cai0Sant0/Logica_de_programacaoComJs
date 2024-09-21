// Descrição   : Solicitar 3 notas dos alunos com diferentes pesos e fazer a média aritmética

alert("Escreva suas três e veja a média final (notas de 0 a 10)")

let nota1 = Number(prompt("Primeira nota"));
let nota2 = Number(prompt("Segunda nota"));
let nota3 = Number(prompt("Terceira nota"));

let notaFinal = ((nota1*2)+(nota2*3)+(nota3*5))/10
alert("A sua nota final é: "+notaFinal.toFixed(1));




