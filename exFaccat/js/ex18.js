// Descrição   : Solicitar ano atual e ano de nascimento para ver se já possui idade para votar

alert("Saiba se já possui idade para votar nesse ano")
let anoAtual = parseInt(prompt("Digite o ano atual"));
let anoNascimento = parseInt(prompt("Agora digite o seu ano de nascimento"));

let idade = anoAtual - anoNascimento

if (idade >= 16) {
    alert("Sua idade: " + idade + " ano(s)")
    alert("Situação: PODE VOTAR!")
}
else {
    alert("Sua idade: " + idade + " anos(s)")
    alert("Situação: NÃO PODE VOTAR!")
}