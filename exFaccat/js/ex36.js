// Descrição   :  ler as idades de 2 homens e de 2 mulheres e calcular e escreva a somadas idades do homem mais velho com a mulher mais nova, e o produto das idades do homem maisnovo com a mulher mais velha


alert("Digite duas idades de dois homens e duas mulheres")

let idadeMulher1 = parseInt(prompt("Escreva a idade da primeira mulher: "))

let idadeMulher2 = parseInt(prompt("Escreva a idade da segunda mulher: "))

let idadeHomem1 = parseInt(prompt("Escreva a idade do primeiro homem: "))

let idadeHomem2 = parseInt(prompt("Escreva a idade do segundo homem: "))

if (idadeMulher1 > idadeMulher2 && idadeHomem1 > idadeHomem2) {
    alert("Homem mais velho: " + idadeHomem1 + " anos")
    alert("Homem mais novo: " + idadeHomem2 + " anos")

    alert("Mulher mais velha: " + idadeMulher1 + " anos")
    alert("Mulher mais nova: " + idadeMulher2 + " anos")

    alert(`Soma da idade do homem mais velho com a mulher mais nova: ${idadeHomem1 + idadeMulher2}`)

    alert(`Multiplicação da idade do homem mais novo com a mulher mais velha:  ${idadeHomem2*idadeMulher1}`)
}
else if (idadeMulher2>idadeMulher1 && idadeHomem2>idadeHomem1){

    alert("Homem mais velho: " + idadeHomem2 + " anos")
    alert("Homem mais novo: " + idadeHomem1 + " anos")

    alert("Mulher mais velha: " + idadeMulher2 + " anos")
    alert("Mulher mais nova: " + idadeMulher1 + " anos")

    alert(`Soma da idade do homem mais velho com a mulher mais nova: ${idadeHomem2 + idadeMulher1}`)

    alert(`Multiplicação da idade do homem mais novo com a mulher mais velha:  ${idadeHomem1*idadeMulher2}`)
}
else if(idadeMulher1>idadeMulher2 && idadeHomem2>idadeHomem1){

    alert("Homem mais velho: " + idadeHomem2 + " anos")
    alert("Homem mais novo: " + idadeHomem1 + " anos")

    alert("Mulher mais velha: " + idadeMulher1 + " anos")
    alert("Mulher mais nova: " + idadeMulher2 + " anos")

    alert(`Soma da idade do homem mais velho com a mulher mais nova: ${idadeHomem2 + idadeMulher2}`)

    alert(`Multiplicação da idade do homem mais novo com a mulher mais velha:  ${idadeHomem1*idadeMulher1}`)
}
else if(idadeMulher2>idadeMulher1 && idadeHomem1>idadeHomem2){
    alert("Homem mais velho: " + idadeHomem1 + " anos")
    alert("Homem mais novo: " + idadeHomem2 + " anos")

    alert("Mulher mais velha: " + idadeMulher2 + " anos")
    alert("Mulher mais nova: " + idadeMulher1 + " anos")

    alert(`Soma da idade do homem mais velho com a mulher mais nova: ${idadeHomem1 + idadeMulher1}`)

    alert(`Multiplicação da idade do homem mais novo com a mulher mais velha:  ${idadeHomem2*idadeMulher2}`)
}
