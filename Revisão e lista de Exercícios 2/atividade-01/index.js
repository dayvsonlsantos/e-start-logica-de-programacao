// 1) Faça uma função que calcule e escreva a média aritmética dos números pares e inteiros entre 70 e 100.

console.log("Questão 1")

function calcularMedia(){
  
  let quant = 0
  let total = 0
  
  for (let valor = 71; valor > 70 && valor < 100; valor++){
    if (valor % 2 == 0){
      total += valor
      quant += 1
    }
  }
  
  let media = total/quant
  
  return media
  
}

console.log("A média aritmética dos valores entre 70 e 100, é : " + calcularMedia())

//2) Faça uma função que escreva no console a mensagem Olá Mundo! 15 vezes.

console.log("Questão 2")

function exibir(){
  
  for(let cont = 1; cont <= 15; cont++){
    console.log(cont + ": Olá, Mundo!")
  } 
}

exibir()

//3) Faça uma função que escreva no console os 6 primeiros números após o valor 88.

function escreverNumeros(){
  
  console.log("Questão 3")
  
  let num = 88
  let contagem = 1
  
  while (contagem <=6){
    num++
    contagem++
    console.log(num)
  }
}

escreverNumeros()