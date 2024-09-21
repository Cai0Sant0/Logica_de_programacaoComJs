// Descrição   : Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permiti

let codUsu = Number(prompt("Digite o código de segurança:"))

let codCertoUsu = 1234
let senhaCertaUsu = 9999

if (codUsu != codCertoUsu) {
    alert("Código Inválido!")
}
else {
    let senhaUsu = Number(prompt("Digite sua senha:"))
    if (senhaUsu != senhaCertaUsu) {
        alert("Senha Incorreta!")
    }
    else {
        alert("Acesso permitido!")
    }
}
