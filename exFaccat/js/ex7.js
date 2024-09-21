// Descrição   : Solicitar data de nascimento e data atual para calcularmos quantos dias já se viveu

alert("Digite a sua data de aniversário e veja quantos dias já viveu (dd/mm/aaaa)");

let diaNascimento = parseInt(prompt("Digite o dia de nascimento"));
let mesNascimento = parseInt(prompt("Digite o mês de nascimento"));
let anoNascimento = parseInt(prompt("Digite o ano de nascimento"));

let dataAtual = new Date

let diaAtual = dataAtual.getDate();
let mesAtual = dataAtual.getUTCMonth()+1;
let anoAtual = dataAtual.getFullYear();

let diasVividos = (diaAtual+mesAtual*30+anoAtual*365)-(diaNascimento+mesNascimento*30+anoNascimento*365);

alert(`Você já viveu ${diasVividos} dias`);



