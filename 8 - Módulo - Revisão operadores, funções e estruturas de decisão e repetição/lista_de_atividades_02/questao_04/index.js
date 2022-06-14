/*

4)      Construa uma função que receba um número.

a)       Se positivo mostrar a informação de que ele é positivo.

b)      Se for negativo, mostrar a informação de que ele é negativo.

*/

var valor = Number(window.prompt("Informe um número: "))

function VerificarPositivoNegativo(num){
    let resultado = ""
    if(num >= 0){
        resultado = "Positivo"
    }else{
        resultado = "Negativo"
    }
    return resultado
}

alert("O número informado " + valor + " é um numero " + VerificarPositivoNegativo(valor))