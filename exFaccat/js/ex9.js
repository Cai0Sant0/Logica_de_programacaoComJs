// Descrição   : Solicitar o salário de um funcionário e o percentual, calcular quanto a mais ele vai ganhar

alert("Digite o salário e o reajuste e veja a reformulação do salário");

let salario = Number(prompt("Digite o salário:"));
let reajuste = Number(prompt("Digite a porcentagem a ser reajustada(para mais):"));

reajuste = (salario*(reajuste/100))


alert(` A partir de agora você receberá:  ${salario+reajuste} R$`);





