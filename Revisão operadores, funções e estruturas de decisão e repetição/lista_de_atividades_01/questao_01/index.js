/*

1)      Faça uma função que:

a)       Receba código da peça

b)      Receba valor da peça

c)       Receba Quantidade de peças

d)      Calcule o valor total da peça (Quantidade * Valor da peça)

e)      Escreva no console o código da peça e seu valor total.

*/

var codigoPeca = parseInt(window.prompt("Informe o código da peça: "))
var valorPeca = Number(window.prompt("Informe o valor da peça (Exemplo: 2.49): "))
var quantidadePeca = parseInt(window.prompt("Informe a quantidade de peças: "))

function calcular_total(valor, quantidade){
    let valorTotal = quantidade*valor
    return valorTotal
}

alert("Código: " + codigoPeca + ", valor total: " + calcular_total(valorPeca, quantidadePeca))