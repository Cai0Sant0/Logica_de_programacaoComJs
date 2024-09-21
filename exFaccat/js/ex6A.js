// Descrição   : Solicitar altura e largura de um retângulo e calcular sua área

alert("Digite o valor da altura e largura do retângulo e veja sua área")
let altura = Number(prompt("Digite a altura (cm):"));
let largura = Number(prompt("Digite a largura (cm):"));

alert(`A área do retângulo é de: ${altura*largura.toFixed(2)} Cm²`);