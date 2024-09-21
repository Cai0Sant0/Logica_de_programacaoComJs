// Descrição   : Ler o nome de dois times e quantos gols cada time fez, depois colocar quem ganhou e se não houver vencedores colocar empate

alert("Digite Algumas informações e veja o resultado do jogo")

let time01 = prompt("Digite o nome do time de casa:")

let time02 = prompt("Digite o nome do time visitante:")

let golsTime01 = parseInt(prompt("Digite o numero de gols do time de casa:"))

let golsTime02 = parseInt(prompt("Digite o numero de gols do time visitante:"))


if (golsTime01 > golsTime02) {
    alert(time01 + " Ganhou por " + golsTime01 + " a " + golsTime02)
}
else {
    if (golsTime02 > golsTime01) {
        alert(time02 + " Ganhou por " + golsTime02 + " a " + golsTime01)
    }
    else {
        alert("EMPATE!")
    }
}

