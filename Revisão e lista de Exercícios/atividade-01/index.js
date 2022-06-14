/*

1 - Faça uma função para receber um número e mostrar o resultado conforme a tabela abaixo:

- número < 10: O número é unidade
- número >= 10 e número < 100: O número é dezena
- número >= 100 e número < 1000: O número é centena

*/

alert("Questão 1")

var valor = parseInt(prompt("Informe um número de 0 a 1000: "))

function casaDecimal(num){
  if (num < 10){
    return "O número é unidade"
  }else if(num >= 10 && num < 100){
    return "O número é dezena"
  }else if(num >= 100 && num < 1000){
    return "O número é centena"
  }else{
    return "Favor informar um número dentros dos valores informados"
  }
}

alert(casaDecimal(valor))

/*

2 - Tendo como dados de entrada a altura e o sexo de uma pessoa, faça uma função que calcule seu peso ideal, utilizando as seguintes fórmulas:

- Para homens: (72.7*h) - 58

- Para mulheres: (62.1*h) - 44.7   

- (h = altura)

*/

alert("Questão 2")

var alturaPessoa = prompt("Informe a sua altura em metros '(Exemplo: 1.75)': ")
var sexoPessoa = prompt("Informe o seu sexo ('M' ou 'F'): ")

function calcularPesoIdeal(altura, sexo){
  if (sexo == "M" || sexo == "m"){
    var PesoIdeal = (72.7*altura) - 58
  } else if (sexo == "F" || sexo == "f"){
    var PesoIdeal = (62.1*altura) - 44.7  
  }else{
    var PesoIdeal = "Não foi possível calcular, favor informar os dados novamente"
  }
  return PesoIdeal
}

alert ("A altura informada foi: " + alturaPessoa + "\n" + "O sexo informado foi: " + sexoPessoa + "\n" + "O resultado do seu Peso Ideal foi: " + calcularPesoIdeal(alturaPessoa, sexoPessoa))

/*

3 - Faça uma função que recebe a idade do usuário e verifique se ele tem 18 anos ou mais. Se a resposta for positiva escrever “maior de idade”, senão “menor de idade”.

*/

alert("Questão 3")

var idade = parseInt(prompt("Informe a sua idade: "))

function verificarMaiorIdade (anos){
  if (anos >= 18){
    return "Você é uma pessoa maior de idade."
  }else{
    return "Você é uma pessoa menor de idade."
  }
}

alert(verificarMaiorIdade(idade))