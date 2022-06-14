/*

1) Faça uma função que receba a quantidade de peças a serem compradas, e obedeça as regras abaixo:

- Se a quantidade = 50, informar ao cliente que ele tem desconto de 5%.

- Se a quantidade = 100, informar ao cliente que ele tem desconto de 10%.

- Qualquer valor diferente, o cliente não tem desconto.

*/

alert ("Questão 1")

var pecasCompradas = prompt("Informe a quantidade de peças compradas: ")

function verificarQuantidade(quantidade){
  switch(quantidade){
    case '50':
      return "Você comprou 50 peças." + "\n" + "Eba! Você possui 5% de desconto."
      break
    case '100':
      return "Você comprou 100 peças." + "\n" + "Eba! Você possui 10% de desconto."
      break
    default:
      return "Você comprou " + quantidade + " peças." + "\n" + "Infelizmente você não possui nenhum desconto."
  }
}

alert(verificarQuantidade(pecasCompradas))