// Descrição   : Solicitar raio de um círculo e achar sua área

alert("Digite o valor do raio e descubra a área do círculo")
let raio = Number(prompt("Digite o raio (cm):"));

let area = Math.PI*(raio*raio)

alert(`A área do círculo é de: ${area.toFixed(2)} Cm²`);