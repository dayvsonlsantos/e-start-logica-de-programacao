/*
3) Faça uma função que receba o nome de 2 times e o número de gols marcados na partida (para cada time), para:

- Escrever o nome do vencedor.
- Caso não haja vencedor deverá ser retornada a palavra EMPATE. 

*/

alert ("Questão 3")

//Coletando dados do primeiro time
alert ("Sobre o 1º Time")
var time1 = prompt("Informe o nome do 1º Time: ")
var golsTime1 = prompt("Quantos gols fez o 1º Time? ")

//Coletando dados do segundo time
alert ("Sobre o 2º Time")
var time2 = prompt("Informe o nome do 2º Time: ")
var golsTime2 = prompt("Quantos gols fez o 2º Time?")
        
function resultado(nomeTime1, pontuacaoTime1, nomeTime2, pontuacaoTime2){
  if (pontuacaoTime1 > pontuacaoTime2){
    return "O vencedor foi o 1º time: " + nomeTime1
  }else if (pontuacaoTime2 > pontuacaoTime1){
    return "O vencedor foi o 2º time: " + nomeTime2
  }else{
    return "Ocorreu um empate"
  }
}

alert("------ Resultado ------" + "\n" + resultado(time1, golsTime1, time2, golsTime2))