/*

3)      Faça uma função que:

a)       Receba a cotação do dólar

b)      Receba um valor em dólares

c)       Converta esse valor para Real

d)      Mostre o resultado

*/

var cotacaoDolar = Number(window.prompt("Informe a cotação do dólar (Ex: 4.79): "))
var valorDolar = Number(window.prompt("Informe o valor em dólares (Ex: 2.50): "))

function converter(cDolar, vDolar){
    let valorEmReais = cDolar*vDolar
    return valorEmReais
}

alert("O valor informado de $ " + valorDolar + ". Com cotação igual a R$ " + cotacaoDolar + ". Será igual a R$ " + converter(cotacaoDolar, valorDolar))