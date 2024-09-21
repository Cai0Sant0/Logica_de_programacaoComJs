// Descrição   : faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.

alert("Digite Algumas informações e veja se você está apto para se aposentar")

let codigoFuncionario = prompt("Digite o seu código de funcionário:")

let anoNascimento = Number(prompt("Ano de nascimento:"))

let anoQueEntrouNaEmpresa = Number(prompt("Ano que entrou na empresa:"))

let anoAtual = new Date
anoAtual = anoAtual.getFullYear()


let idade = anoAtual - anoNascimento
let anosTrabalhados = anoAtual - anoQueEntrouNaEmpresa

if (idade >= 60 && anosTrabalhados >= 25) {
    alert("Tempo de trabalho: "+ anosTrabalhados+ " anos")
    alert("Idade: "+ idade+ " anos")
    alert("Funcionário com o código: "+ codigoFuncionario+ " está apto para aposentadoria!")
}
else if(idade >= 65){
    alert("Tempo de trabalho: "+ anosTrabalhados+ " anos")
    alert("Idade: "+ idade+ " anos")
    alert("Funcionário com o código: "+ codigoFuncionario+ " está apto para aposentadoria!")
}
else if(anosTrabalhados >= 30){
    alert("Tempo de trabalho: "+ anosTrabalhados+ " anos")
    alert("Idade: "+ idade+ " anos")
    alert("Funcionário com o código: "+ codigoFuncionario+ " está apto para aposentadoria!")
}
else{
    alert("Tempo de trabalho: "+ anosTrabalhados+ " anos")
    alert("Idade: "+ idade+ " anos")
    alert("Funcionário com o código: "+ codigoFuncionario+ " não está apto para aposentadoria!") 
}