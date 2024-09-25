// Descrição   : Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o
//total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras
//dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve
//parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar
//como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da
//média.

let soma = 0
let media = 0
let quantidadeDeNumeros = 0 
let numero = 0


alert("Para parar basta digitar um número negativo")

do {
    numero = Number(prompt("Digite um número"))

    soma += numero
    quantidadeDeNumeros++
} while (numero > 0)

media = soma / quantidadeDeNumeros

alert("Quantidade de números digitados: " + quantidadeDeNumeros)
alert("Soma dos números digitados: " + soma)
alert("Média dos números digitados: " + media.toFixed(2))