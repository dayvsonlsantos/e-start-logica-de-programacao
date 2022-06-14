/*

1) Faça uma função que escreva no console uma palavra de acordo com a especificação abaixo:

a)Utiliza os valores de 1 a 299.

b)Para cada valor, se ele for múltiplo de 3, deverá exibir a palavra: VAMO.

c)Para cada valor, se ele for múltiplo de 5, deverá exibir a palavra: BORA.

d)Para cada valor, se ele for múltiplo de 3 e 5 ao mesmo tempo, deverá exibir a palavra: VAMBORA.

*/

alert ("Desafio 01")

var num = prompt("Informe um valor de 1 a 299: ")

function exibirPalavra(valor){
  
  let result = 0;
  
  if (valor >= 1 && valor <=299) {
    if(valor % 3 == 0 && valor % 5 == 0){
      result = "VAMBORA"
    }else if(valor % 3 == 0){
      result = "VAMO"
    }else if(valor % 5 == 0){
      result = "BORA"
    }else{
      result = "Esse valor não é múltiplo de 3, nem de 5"
    }
  }else{
    result = "Valor inválido"
  }
  return result
}

alert(exibirPalavra(num))
