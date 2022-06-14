//1) Faça uma função que recebe a idade de uma pessoa e retorna a informação se ela é idosa. Sabemos que uma pessoa é considerada idosa quando tem idade maior ou igual a 60 anos.

alert ("Questão 1")

var idade = prompt("Informe a sua idade: ")

function verificarMaiorIdade(anos){
  if(anos >= 60){
    return "Idosa."
  }else{
    return "Jovem."
  }
}

alert("Com essa idade, você é considerada uma pessoa: " + verificarMaiorIdade(idade))