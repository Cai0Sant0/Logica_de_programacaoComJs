// Descrição   :  Solicitar o salário médio e o percentual de reajuste e ao final exibir o salário novo

alert("Escreva o salário médio do funcionário e o percentual a ser mudado para mais em seu salário")


let salarioMedio  =parseFloat(prompt("Escreva o salário médio (R$)"))
let percentualReajuste =parseInt(prompt("Escreva o percentual de reajuste"))

let novoSalario = salarioMedio+salarioMedio*(percentualReajuste/100)


alert("O salário reformulado é de: R$ "+novoSalario.toFixed(2))