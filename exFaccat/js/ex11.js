// Descrição   : Solicitar o número de carros vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. calcular e mostrar salário final do vedendor

alert("Escreva algumas informaçôes e veja seu salário final");

let salarioFixo = Number(prompt("Digite seu salário(R$): "));
let numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos: "));
let valorCadaCarro = Number(prompt("Qual valor você recebe por carro vendido (R$)?"));
let valorTotalVendas = Number(prompt("Qual foi o valor total de suas vendas (R$)?"));


let salarioFinal = salarioFixo + (numeroCarrosVendidos * valorCadaCarro) + (valorTotalVendas * 0.05)

alert("Seu salário final é de: R$ "+salarioFinal.toFixed(2));






