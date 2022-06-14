/*

1) Faça uma função que recebe um valor inteiro e positivo:

a)       Se o valor for menor que 350, a função deverá incrementar o valor recebido com o valor 5.

b)      Se o novo valor for múltiplo de 5, deverá exibir a mensagem: "MÚLTIPLO DE 5".

c)       Se o novo valor for múltiplo de 7, deverá exibir a mensagem: "MÚLTIPLO DE 7".

*/

/*

Professora fiquei na dúvida se deveria calcular os múltiplos apenas no novo valor (incrementados com 5), como dizia na questão, ou não.
Então acabei colocando apenas nos valores incrementados com 5, ou seja, menores que 350.

*/

var num = parseInt(prompt("Informe um valor inteiro e positivo: "))

function multiplos(valor) {
  let resultado = ""

  if (valor >= 0) {
    if (valor < 350) {
      valor += 5

      if (valor % 5 == 0) {
        resultado = "MÚLTIPLO DE 5"
      } else if (valor % 7 == 0) {
        resultado = "MÚLTIPLO DE 7"
      } else {
        resultado = "Esse número não é múltiplo nem de 5, nem de 7"
      }
    } else {
      resultado = "Esse valor é maior ou igual a 350"
    }
  } else {
    resultado = "Esse número é negativo"
  }
  return resultado
}

alert(multiplos(num))