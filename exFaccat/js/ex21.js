// Descrição   : Solicitar hora de inicio e de termino de uma partida de xadrez e ver quantas horas durou

alert("Coloque a hora de começo e término da partida e veja quantas horas durou")
let comeco = parseInt(prompt("Digite a hora de inicio (Somente horas)"))
let fim = parseInt(prompt("Digite a hora de término (Somente horas)"))

let duracao = fim - comeco

if (duracao > 24) {
    alert("Partida cancelada, excedeu as horas possíveis")
}
else {
    alert("A partida durou: " + duracao + " hora(s)")
}


