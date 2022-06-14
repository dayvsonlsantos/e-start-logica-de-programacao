/*

1) Faça uma função que recebe um parâmetros numéricos:

- Calcule o resto da divisão por 5
- Se o resto da divisão for 0, dizer que o número é dividido por 5.
- Se não, dizer que o número não é dividido por 5.

*/

alert ("Questão 6")

var valor = prompt("Informe um valor: ")

function calcularResto(num){
  
  let restoDivisao = num % 5
  
  if (restoDivisao == 0){
      return "O número " + num + " é divisível por 5, pois seu resto é igual a " + restoDivisao
  }else{
    return "O número " + num + " não é divisível por 5, pois seu resto é igual a " + restoDivisao
  }
}

alert(calcularResto(valor))