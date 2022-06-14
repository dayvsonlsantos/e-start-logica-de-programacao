/*

1)      Faça uma função que recebe 2 valores:

a)       Se o primeiro valor for zero, imprimir no console o texto "Valor Inválido!".

b)      Se o primeiro valor não for zero, obter o resto da divisão do primeiro valor pelo segundo e escrever no console o resultado.

*/

console.log("Questão 1")

function valores(num1, num2){
  
  let resultado = 0
  
  if(num1 == 0 || num2 == 0){ //Coloquei assim, pois a questão pede para caso o primeiro valor seja 0, informar isso. No entanto, o segundo valor também não pode ser zero, pois nenhum número pode ser dividido por zero.
    resultado = "Valor Inválido"
  }else{
    resultado = num1 % num2
  }
  return resultado
}

let valor1 = parseInt(prompt("Informe o 1º valor: "))
let valor2 = parseInt(prompt("Informe o 2º valor: "))

console.log("Resto da divisão de " + valor1 + " / " + valor2 + " = " + valores(valor1, valor2))

//2) Faça uma função que escreva no console 10 primeiros números inteiros maiores que 100.

console.log("Questão 2")

function numerosMaiores(){
  
  let valor = 100
  
  for(let cont = 1; cont <= 10; cont++){
    valor++
    console.log(valor)
  }
}

console.log("Os 10 primeiros números maiores que 100, são: ")
numerosMaiores()

//3) Faça uma função que gera e escreve os números ímpares entre 100 e 200

console.log("Questão 3")

function impares(){
  
  let valor = 100
  
  while (valor < 200){
    if(valor % 2 != 0){
      console.log(valor)
    }
    valor++
  }  
}

console.log("Números Impares entre 100 e 200")
impares()