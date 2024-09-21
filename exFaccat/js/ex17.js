// Descrição   : Solicitar duas notas do aluno e verificar se ele foi aprovado

alert("Digite suas notas e veja se foi aprovado ou não");
let nota01 = Number(prompt("Primeira nota"));
let nota02 = Number(prompt("Segunda nota"));

let media  = (nota01 + nota02) / 2;

if (media >= 6) {
    alert("Sua média: "+ media.toFixed(1));
    alert("Situação: APROVADO!!!");
}
else {
    alert("Sua média: "+ media.toFixed(1));
    alert("Situação: REPROVADO!!!");
}

