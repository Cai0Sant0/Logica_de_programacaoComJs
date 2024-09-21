// Descrição   : Solicitar nome,sexo e altura da pessoa para saber seu peso ideal

alert("Digite algumas informações para descobrir sua média de peso")
let nome = prompt("Digite seu nome")

let sexo = prompt("Digite seu sexo (M para masculino/F para feminino)")

let altura = Number(prompt("Digite sua altura (em metros)"))

if (sexo == "M" || sexo == "m"){
    let pesoIdeal = (72.7 * altura) - 58
    alert(nome + " seu peso ideial é: " + pesoIdeal.toFixed(2) + "kg")
}
else {
    let pesoIdeal = (62.1 * altura) - 44.7
    alert(nome + " seu peso ideial é: " + pesoIdeal.toFixed(2) + "kg")
}