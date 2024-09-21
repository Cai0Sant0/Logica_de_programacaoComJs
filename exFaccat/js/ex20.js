// Descrição   : Solicitar dois valores e os colocar em ordem crescente

alert("Digite dois números e os veja em ordem crescente")
let numero01 = Number(prompt("Digite um número"));
let numero02 = Number(prompt("Digite um número"));


if( numero01 > numero02){

    alert(`Ordem crescente: ${numero02} ${numero01}`)
}
else{
    alert(`Ordem crescente: ${numero01} ${numero02}`)
}
