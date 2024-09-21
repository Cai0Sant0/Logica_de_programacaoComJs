// Descrição   : Solicitar altura e base de um triângulo e calcular sua área

alert("Digite o valor da altura e base do triângulo e veja sua área")
let altura = Number(prompt("Digite a altura (cm):"));
let base = Number(prompt("Digite a base (cm):"));

let area = (altura*base)/2

alert(`A área do triângulo é de: ${area.toFixed(2)} Cm²`);
