//4) Faça uma função que receba cinco notas do aluno e retorne a média com base na fórmula: (N1 + N2 + N3 + N4 + N5)/5

alert ("Questão 4")

var nota = []
var soma = 0

function calcularMedia(){
  
  for (let count = 1; count < 6; count++){
    nota[count] = prompt("Informe a " + count + "ª nota: ")
    soma = parseInt (nota[count]) + soma
  }
  
  var media = soma/5
  return media
  
}

alert ("A média desse aluno(a) foi: " + calcularMedia())
alert ("Fim")