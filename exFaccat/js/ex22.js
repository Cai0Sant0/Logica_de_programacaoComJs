// Descrição   : Solicitar as horas trabalhadas no mês, o salário por hora e no fim o salário final acrescido das horas extras

alert("Digite aqui suas horas trabalhadas no mês e quanto ganha por hora")

let horasTrabalhadasMes = parseInt(prompt("Horas trabalhadas no mês"))

let ganhoHora = Number(prompt("Ganho a hora (R$)"))


let salario = horasTrabalhadasMes * ganhoHora

if (horasTrabalhadasMes > 160) {

    let salarioAcrescido = salario + (salario * 0.5)

    alert("Você possui direto a hora extra!!!")
    alert("Horas trabalhadas: " + horasTrabalhadasMes + " horas")
    alert("Salário acrescido de hora extra: R$ " + salarioAcrescido)
}
else {
    alert("Você não possui direto a hora extra!!!")
    alert("Horas trabalhadas: "+ horasTrabalhadasMes+ " horas")
    alert("Salário normal: R$ " + salario)
}
