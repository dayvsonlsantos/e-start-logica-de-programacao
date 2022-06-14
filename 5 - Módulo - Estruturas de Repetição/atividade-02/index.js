// 1)Faça uma função que exibe todos os números maiores que zero e menores que 10

console.log("Questão 1")

function exibirValores(){
  
  let i = 1
  let numeros = [0]
  
  do{
    numeros[i] = i
    i++
  }
  while (i < 10)
  
  return numeros
}

var valores = exibirValores()
var cont = 1

console.log("Valores entre 0 e 10:")

do {
  console.log(valores[cont])
  cont++
}
while(cont < valores.length)

// 2) Faça uma função que exibe os 10 primeiros números que são menores que 80
  
console.log("Questão 2")

function exibirValores2(){
  
  let i = 80
  let num = 0
  let menores = [0]
  
  do{
    i--
    num++
    menores[num] = i
  }
  while (i < 80 && i > 70)
  
  return menores
}

var valoresMenores = exibirValores2()
var cont2 = 1

console.log("10 primeiro valores menores que 80:")

do{
  console.log(valoresMenores[cont2])
  cont2++
}
while(cont2 < valoresMenores.length)