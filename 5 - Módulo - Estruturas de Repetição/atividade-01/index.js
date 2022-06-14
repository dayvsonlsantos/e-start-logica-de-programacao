//1) Faça uma função que exibe todos os números menores que 10.

console.log ("Questão 1")

function exibirNumeros(){
  
  let i = 0
  let lista = [0]
  
  while (i < 10){
    lista[i] = i
    i++
  }
  return lista
}

var valores = exibirNumeros()

var cont = 0

while (cont < valores.length){
  console.log(valores[cont])
  cont++
}

//2) Faça uma função que exibe todos os números maiores que 50 e menores que 70.

console.log("-----------------")

console.log("Questão 2")

function exibirNumeros2(){
  
  let i = 51
  let listaDeNumeros = [0]
  
  while (i < 70){
    listaDeNumeros[i] = i
    i++
  }
  return listaDeNumeros
}

var listaTotal = exibirNumeros2()

var cont2 = 51

while (cont2 < listaTotal.length){
  console.log(listaTotal[cont2])
  cont2++
}