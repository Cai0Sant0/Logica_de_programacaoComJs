// Descrição   : Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100)

console.log("Soma dos 100 primeiros números inteiros")
console.log("----------------------------------------")

let soma = 0;

for (let numero = 1; numero < 101; numero++) {
   soma += numero
}




console.log("A soma é igual a: " + soma)