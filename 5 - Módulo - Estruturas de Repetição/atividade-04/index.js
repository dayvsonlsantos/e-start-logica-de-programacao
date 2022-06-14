//1) Faça uma função que exibe todos os números menores que 1000 que são múltiplos de 100.

console.log("Questão 1")

function multiplicar(){
  console.log("Os múltiplos de 100 são: ")
  
  let valor = 0
  let i = 0
  let multiplos = [0]
  
  while(valor < 1000){
    valor = i * 100
    if(valor < 1000){
      multiplos[i] = valor
      i++
    }
  }
  return multiplos
}

var valoresMultiplos = multiplicar()

for (var cont = 0; cont < valoresMultiplos.length; cont++){
  console.log(valoresMultiplos[cont])
}

//2) Faça uma função que exibe todos os números maiores que 10 e menores que 100 que são pares.

console.log("---------------------")

console.log("Questão 2")

function pares(){
  console.log("Numeros pares:")
  
  let numPares = [0]
  let i = 0
  
  for (let num = 11; num > 10 && num < 100; num++){
    if(num % 2 == 0){
      numPares[i] = num
      i++
    }
  }
  return numPares
}

var valoresPares = pares()
var cont2 = 0

while (cont2 < valoresPares.length){
  console.log(valoresPares[cont2])
  cont2++
}


//3) Faça uma função que recebe um número entre 12 e 20. Se a pessoa digitar um número diferente, mostrar a mensagem "número inválido". Se digitar corretamente, escrever no console o número recebido.

console.log("-------------------")

alert("Questão 3")

function verificar(num){
  if(num > 12 && num < 20){
    result = "O número informado foi: " + num
  }else{
    result = "Número inválido"
  }
  return result
}

var valor = prompt("Informe um número entre 12 e 20: ")
alert(verificar(valor))