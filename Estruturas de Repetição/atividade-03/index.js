// 1) Faça uma função que escreve os números de 1 a 10 em ordem crescente.

console.log("Questão 1")

function exibirValores(){
  let crescente = [0]
  for (let i = 1; i <= 10; i++){
    crescente[i] = i
  }
  return crescente
}

var ordemCrescente = exibirValores()

console.log("Ordem Crescente: ")

for(let cont=1; cont < ordemCrescente.length; cont++){
  console.log(ordemCrescente[cont])
}

// 2) Faça uma função que escreve os números de 10 a 1 em ordem decrescente

console.log("Questão 2")

function exibirValores2(){
  let decrescente = [0]
  let num = 10
  for (let i = 1; i <= 10; i++){
    decrescente[i] = num
    num--
  }
  return decrescente
}

var ordemDecrescente = exibirValores2()

console.log("Ordem Decrescente: ")

for(let cont2 = 1; cont2 < ordemDecrescente.length; cont2++){
  console.log(ordemDecrescente[cont2])
}