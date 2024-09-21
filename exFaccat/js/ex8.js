// Descrição   : Solicitar número de votos brancos, núlos e válidos e saber o percentual de cada em relação ao total de votos

alert("Veja o percentual de votos na eleição");

let totalVotos = parseInt(prompt("Escreva o número total de votos"));

let votosValidos = parseInt(prompt("Escreva o número de votos válidos"));
let votosNulos = parseInt(prompt("Escreva o número de votos nulos"));
let votosBrancos = parseInt(prompt("Escreva o número de votos brancos"));

alert("Percentual de votos válidos: "+ (votosValidos/totalVotos)*100+" %")
alert("Percentual de votos brancos: "+ (votosNulos/totalVotos)*100+" %")
alert("Percentual de votos nulos "+(votosBrancos/totalVotos)*100 +" %")



