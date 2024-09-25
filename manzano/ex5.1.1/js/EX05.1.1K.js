// Descrição   : Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
//banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
//nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
//do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
//calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
//total acumulado da área residencial.

alert("Calculando a area dos comôdos de sua casa e no final mostrando o total de m² da casa")

let resposta = "sim"
let area = 0
let totalAreaCasa = 0

while (resposta == "sim"){

   let nomeDoComodo = prompt("Digite o nome do comôdo: ")

   let comprimento = Number(prompt("Digite o comprimento do comôdo (metros): "))

   let largura = Number(prompt("Digite a largura do comôdo (metros): "))
   

   area = comprimento*largura
   totalAreaCasa+=area

   alert("Área do "+nomeDoComodo+" é igual a "+area.toFixed(2)+" m²")


    resposta = prompt("Deseja continuar? (Sim ou Não)")
   

   resposta = resposta.toLowerCase()


}

alert("A área total da casa é de: "+totalAreaCasa.toFixed(2)+" m²")