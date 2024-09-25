// Descrição   :  Deve ser criado um programa de computador que efetue a leitura da quantidade de votos válidos para cada candidato, além de efetuar também a leitura da quantidade de votos nulos e votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos válidos, nulos e em branco;

alert("Algoritmo de votação digite os votos e veja os resultados")
let votosA = parseInt(prompt("Digite quantos votos válidos o Presidente A obteve:"))

let votosB = parseInt(prompt("Digite quantos votos válidos o Presidente B obteve:"))

let votosC = parseInt(prompt("Digite quantos votos válidos o Presidente C obteve:"))

let votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos:"))

let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos:"))


let votosTotais = votosA+votosB+votosC+votosNulos+votosBrancos //Pegando todos os votos

let totalVotosValidos =  votosA+votosB+votosC// pegando todos os votos válidos antes de transforma-los em porcentagem

//Transformando os votos em porcentagem

votosA = (votosA/votosTotais)*100
votosB = (votosB/votosTotais)*100
votosC = (votosC/votosTotais)*100
votosBrancos = (votosBrancos/votosTotais)*100
votosNulos = (votosNulos/votosTotais)*100

alert("RESULTADO DAS ELEIÇÕES")
alert("Total de votos: "+votosTotais)
alert("Total de votos válidos: "+totalVotosValidos)
alert("Porcentagem de votos para o Candidato A: "+votosA.toFixed(2)+" %")
alert("Porcentagem de votos para o Candidato B: "+votosB.toFixed(2)+" %")
alert("Porcentagem de votos para o Candidato C: "+votosC.toFixed(2)+" %")
alert("Porcentagem de votos brancos: "+votosBrancos.toFixed(2)+" %")
alert("Porcentagem de votos nulos: "+votosNulos.toFixed(2)+" %")