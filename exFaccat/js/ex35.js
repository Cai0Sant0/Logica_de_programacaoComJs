// Descrição   : ler o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcular e imprimir o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.

alert("----TABELA DE PREÇO-----")

alert("Gasolina -- Litro 3,30 R$")

alert("Álcool -- Litro 2,90 R$")

alert("Digite algumas informações e descubra seu desconto no combustível")

let tipoCombustivel = prompt("Qual o tipo de combustível? (G-gasolina) ou (A-álcool)")

tipoCombustivel = tipoCombustivel.toLowerCase()

let litrosVendidos = Number(prompt("Quantidade de litros abastecidos"))


if (tipoCombustivel == "g" && litrosVendidos <= 20) {

    let precoGasosa = litrosVendidos * 3.30
    let desconto = precoGasosa * 0.04
    let precoFinal = precoGasosa - desconto 

    alert("Preço sem desconto: R$ " + precoGasosa.toFixed(2))
    alert("Desconto de: R$ " + desconto.toFixed(2))
    alert("Preço Final: R$ " + precoFinal.toFixed(2))
}
else {
    if (tipoCombustivel = "g" && litrosVendidos > 20) {

        let precoGasosa = litrosVendidos * 3.30
        let desconto = precoGasosa * 0.06
        let precoFinal = precoGasosa - desconto 

        alert("Preço sem desconto: R$ " + precoGasosa.toFixed(2) )
        alert("Desconto de: R$ " + desconto.toFixed(2) )
        alert("Preço Final: R$ " + precoFinal.toFixed(2) )
    }
    else {
        if (tipoCombustivel = "a" && litrosVendidos <= 20) {

            let precoAlcool = litrosVendidos * 2.90
            let desconto = precoAlcool * 0.03
            let precoFinal = precoAlcool-desconto

            alert("Preço sem desconto: R$ " + precoAlcool.toFixed(2) )
            alert("Desconto de: R$ " + desconto.toFixed(2) )
            alert("Preço Final: R$ " + precoFinal.toFixed(2) )
        }
        else {
            if (tipoCombustivel = "a" && litrosVendidos > 20) {

                let precoAlcool = litrosVendidos * 2.90
                let desconto = precoAlcool * 0.06
                let precoFinal = precoAlcool-desconto

                alert("Preço sem desconto: R$ " + precoAlcool.toFixed(2) )
                alert("Desconto de: R$ " + desconto.toFixed(2) )
                alert("Preço Final: R$ " + precoFinal.toFixed(2))
            }
            else {
                alert("Combustível inválido")
            }
        }
    }
}
