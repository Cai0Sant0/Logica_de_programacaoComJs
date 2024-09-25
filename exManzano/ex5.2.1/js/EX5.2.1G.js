// Descrição   : Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10


console.log("Valor dos fatoriais dos números ímpares situados entre 1 e 10")
console.log("-------------------------------------------------------------")

let numero = 1

do {

    if (numero % 2 == 1) {

        let fatorial = numero
        let auxiliar = 1

        while (numero > auxiliar) {

            fatorial *= auxiliar
            auxiliar++

        }

        console.log("O fatorial de ", numero, " é igual a ", fatorial)
        console.log("")

    }
    numero++
} while (numero < 10)