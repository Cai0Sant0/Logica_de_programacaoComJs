// Descrição   : Solicitar lado de um hexágono regular e achar sua área

alert("Digite o valor do lado do hexágono e veja sua área")
let lado = Number(prompt("Digite o lado (cm):"));

let area = 3*lado**2*Math.sqrt(3)/2;

alert(`A área do hexágono é de: ${area.toFixed(2)} Cm²`);
