/*

1)    Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:

Para homens: (72.7*h) - 58

Para mulheres: (62.1*h) - 44.7   

(h = altura)

*/

alert("Questão 1")

var alturaPessoa = prompt("Informe a sua altura em metros '(Exemplo: 1.75)': ")
var sexoPessoa = prompt("Informe o seu sexo ('M' ou 'F'): ")

function calcularPesoIdeal(altura, sexo){
  if (sexo == "M" || sexo == "m"){
    var PesoIdeal = (72.7*altura) - 58
  } else if (sexo == "F" || sexo == "f"){
    var PesoIdeal = (62.1*altura) - 44.7  
  }else{
    var PesoIdeal = "Não foi possível calcular, favor informar os dados novamente"
  }
  return PesoIdeal
}

alert ("A altura informada foi: " + alturaPessoa + "\n" + "O sexo informado foi: " + sexoPessoa + "\n" + "O resultado do seu Peso Ideal foi: " + calcularPesoIdeal(alturaPessoa, sexoPessoa))