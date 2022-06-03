/*

1) O cardápio de uma lanchonete é dado abaixo. Faça uma função que leia a quantidade de cada item que você consumiu e calcule e retorne a conta final.

Hambúrguer - R$ 3,00
Cheeseburger - R$ 2,50
Fritas - R$ 2,50
Refrigerante - R$ 1,00
Milkshake - R$ 3,00

*/

alert("Questão 1")

alert("A seguir, informe os itens e a quantidade que consumiu.")

function calcularConta(){
    
    var total = 0
    
    do{

        var item = parseInt(prompt("Informe um número, por vez, referente aquilo que tenha consumido: " + "\n" + "1 - Hambúrguer" + "\n" + "2 - Cheeseburger" + "\n" + "3 - Fritas" + "\n" + "4 - Refrigerante" + "\n" + "5 - Milkshake"+ "\n" + "\n" + "6 - Sair"))
    
        switch (item){
            case 1:
                var quantidadeHamburguer = parseInt(prompt("Informe a quantidade de hamburgueres comprados: "))
                total = total + (quantidadeHamburguer*3.00)
            break
            case 2:
                var quantidadeCheeseburger = parseInt(prompt("Informe a quantidade de Cheeseburgeres comprados: "))
                total = total + (quantidadeCheeseburger*2.50)
            break
            case 3:
                var quantidadeFritas = parseInt(prompt("Informe a quantidade de Fritas compradas: "))
                total = total + (quantidadeFritas*2.50)
            break
            case 4:
                var quantidadeRefrigerante = parseInt(prompt("Informe a quantidade de Refrigerantes comprados: "))
                total = total + (quantidadeRefrigerante*1.00)
            break
            case 5:
                var quantidadeMilkshake = parseInt(prompt("Informe a quantidade de Milkshakes comprados: "))
                total = total + (quantidadeMilkshake*3.00)
            break
            case 6:
                alert("Obrigado pela preferência")
            break
            default:
                alert("Favor informar um valor válido")
            break
        }
    
    }while(item != 6)

    return total
}

alert("O total da sua compra, foi de R$ " + calcularConta())

//2) Faça uma função que retorne a frase:  Olá, que você tenha um dia muito bom! aaa

alert("Questão 2")

function retorne(){
    alert("Olá, que você tenha um dia muito bom!")
}

retorne()

//3) Faça uma função que receba uma quantidade de chuva dada em polegadas e imprima o equivalente em milímetros (25,4 mm = 1 polegada). 

alert("Questão 3")

var quantChuvaPolegada = Number(prompt("Informe a quantidade de chuva em polegadas: "))

function converterMedida(polegada){
    let milimetros = polegada*25.4
    alert("A quantidade de chuva informada é equivalente a " + milimetros + " milímetros")
}

converterMedida(quantChuvaPolegada)

alert("Fim")