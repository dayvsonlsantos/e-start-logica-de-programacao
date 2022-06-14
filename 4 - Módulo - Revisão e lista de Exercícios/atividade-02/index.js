/*

3 - Faça uma função que recebe o código de um determinado produto e mostre a sua classificação:

1 -> Alimento não-perecível
2, 3 ou 4 -> Alimento perecível
5 ou 6 -> Vestuário
7 -> Higiene Pessoal
8, 9 ou 10 -> Utensílios domésticos
Qualquer outro código -> Código Inválido

*/

alert("Questão 3")

var codigo = parseInt(prompt("Informe o código do produto (1 a 10): "))

function verificarProduto (codigoProduto){
  switch (codigoProduto){
    case 1:
      return "Alimento não-perecível"
      break
    case 2:
    case 3:
    case 4:
      return "Alimento perecível"
      break
    case 5:
    case 6:
      return "Vestuário"
      break
    case 7:
      return "Higiene Pessoal"
      break
    case 8:
    case 9:
    case 10:
      return "Utensílios domésticos"
      break
    default:
      return "Código Inválido"
      break
  }
}

alert("O código informado foi: " + codigo + "\n" + "Referente a: " + (verificarProduto(codigo)))