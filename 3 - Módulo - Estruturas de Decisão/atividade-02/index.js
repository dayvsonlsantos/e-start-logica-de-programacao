//1) Faça uma função que receba um valor numérico para saber se ele é par (é todo número que o resto da divisão é 0) ou ímpar.

alert ("Questão 1")

var valor = prompt("Informe um número: ")

function parOuImpar(num){
  if (num % 2 == 0){
    return "Par."
  }else{
    return "Impar."
  }
}

alert ("Você informou o valor " + valor + " e esse é considerado um número " + parOuImpar(valor))