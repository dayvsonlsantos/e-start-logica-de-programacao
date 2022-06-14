console.log("------------Inicio------------") // Divisão

//Exemplo: Operadores Relacionais

console.log("Operadores Relacionais:")

var dado1 = 15
var dado2 = "15"

console.log("dado1 = 15 e dado2 = '15'")

var resposta1 = (dado1 == dado2)
console.log("dado1 == dado2 é uma informação: "+resposta1)

var resposta2 = (dado1 === dado2)
console.log("dado1 === dado2 é uma informação: "+resposta2)

var resposta3 = (dado1 != dado2)
console.log("dado1 != dado2 é uma informação: "+resposta3)

var resposta4 = (dado1 !== dado2)
console.log("dado1 !== dado2 é uma informação: "+resposta4)

var resposta5 = (dado1 < dado2)
console.log("dado1 < dado2 é uma informação: "+resposta5)

var resposta6 = (dado1 <= dado2)
console.log("dado1 <= dado2 é uma informação: "+resposta6)

console.log("----------------------------") // Divisão

//Exemplo: Operadores lógicos AND, OR e NOT

console.log("Operadores lógicos AND, OR e NOT:")

console.log("num1 = 10 e num2 = 20")

var num1 = 10
var num2 = 20

//AND

var resultado1 = (num1 < num2 && num2 < 30) ? "Verdadeira" : "Falsa"
console.log("A relação 'num1 < num2 && num2 < 30' é: "+resultado1)

//OR

var resultado2 = (num1 > num2 || num2 < 30) ? "Verdadeira" : "Falsa"
console.log("A relação 'num1 > num2 || num2 < 30' é: "+resultado2)
            
//NOT

var resultado3 = !(num1 < num2 && num2 < 30) ? "Verdadeira" : "Falsa"
console.log("A relação '!(num1 < num2 && num2 < 30)' é: "+resultado3)


console.log("----------------------------") // Divisão

//Exemplo: Operadores Aritméticos

console.log("Operadores Aritméticos:")

console.log("valor1 = 14 e valor2 = 2")

var valor1 = 14
var valor2 = 2

var soma = (valor1 + valor2)
console.log("Soma: "+soma)
var sub = (valor1 - valor2)
console.log("Subtração: "+sub)
var mult = (valor1 * valor2)
console.log("Multiplicação: "+mult)
var div = (valor1 / valor2)
console.log("Divisão: "+div)