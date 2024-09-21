// Descrição   : Ler 3 valores e os colocar em ordem crescente

alert("Digite três números e os veja em ordem crescente")

let numero1 = Number(prompt("Digite o primeiro número "))

let numero2 = Number(prompt("Digite o segundo número "))

let numero3 = Number(prompt("Digite o terceiro número "))

if (numero1 < numero2 && numero1 < numero3 && numero2 < numero3) {
    alert("NÚMEROS EM ORDEM CRESCENTE")
    alert(`${numero1}   ${numero2}   ${numero3}`)
}
else if (numero2 < numero1 && numero2 < numero3 && numero1 < numero3){
    alert("NÚMEROS EM ORDEM CRESCENTE")
    alert(`${numero2}   ${numero1}   ${numero3}`)
}
else if (numero3 < numero1 && numero3 < numero2 && numero1 < numero2){
    alert("NÚMEROS EM ORDEM CRESCENTE")
    alert(`${numero3}   ${numero1}   ${numero2}`)
}
else{
    alert("NÚMEROS EM ORDEM CRESCENTE")
    alert(`${numero3}   ${numero2}   ${numero1}`)
}