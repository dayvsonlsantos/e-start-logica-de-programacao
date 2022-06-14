//1) Escreva a declaração de uma variável do tipo booleano para saber se a pessoa é maior de idade. 

alert ("Questão 1")

var idade = prompt("Informe a sua idade: ")

function maiorIdade(){
  let valor = parseInt(idade)
  if (valor >= 18){
    var resultado = true
  }else{
    var resultado = false
  }
  return resultado
}

alert("A idade informada foi: " + idade + "\n" + "É uma pessoa maior de idade: " + maiorIdade())

//2) Escreva a declaração de uma variável do tipo string para armazenar o nome de um animal. 

alert("Questão 2")

var nomeAnimal = prompt("Informe o nome de um animal: ")
alert ("O nome do animal informado foi: " + nomeAnimal)

alert("Fim")