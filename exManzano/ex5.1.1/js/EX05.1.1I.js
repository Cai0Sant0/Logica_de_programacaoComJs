// Descrição   : Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos

let soma = 0;
let media = 0;
let contador = 0;


while (contador < 10){
let numero = Number(prompt("Digite um número: "));

soma+=numero;
contador++;
}

media = soma/10;


alert("A soma dos número digitados é: "+soma)
alert("A média aritmética dos número digitados é: "+media)
