// Descrição   :  Solicitar 4 valores (a,b,c,d) fazer o produto de A por C (*) e a soma de B com D (+)


alert("Digite 4 números e veja a multiplicação do A por C e a soma de B por D")

let a = Number(prompt("Digite o valor de A"))
let b = Number(prompt("Digite o valor de B:"))
let c = Number(prompt("Digite o valor de C:"))
let d = Number(prompt("Digite o valor de D:"))


alert("Valores digitados")
alert(`A: ${a}   B: ${b}   C: ${c}  D: ${d}`)

let p = a * c
let s = b + d

alert("Resultados cálculos")
alert("Produto de A por C: " + p)
alert("Soma de B e D: " + s)

