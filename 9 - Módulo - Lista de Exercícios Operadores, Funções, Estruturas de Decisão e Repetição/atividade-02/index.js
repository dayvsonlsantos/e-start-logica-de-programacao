//1) Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.

//Para funcionar a 1ª questão, deve-se abrir com o html, ou colocar no codepen o código.

alert("Questão 01")

alert("Informe a sua idade exata em anos, meses e dias. (Ex: 30 anos, 7 meses e 25 dias)")

do{
    var idadeAno = parseInt(prompt("Anos: "))
    var idadeMes = parseInt(prompt("Meses: "))
    var idadeDia = parseInt(prompt("Dias: "))
    
    var confirmacao = prompt("Você tem "+ idadeAno + " anos, " + idadeMes + " meses e " + idadeDia + " dias ? Informe:" + "\n" + "S - SIM ou Outra Tecla - Não")
    var resposta = confirmacao.toUpperCase()
}while (resposta != "S")


function converterEmDias(ano, mes, dia){
    let quantidadeDias = dia + (mes*30) + (ano*365)
    alert("Considerando: " + "\n" + "\n" + "1 ano = 365 dias" + "\n" + "1 mes = 30 dias" + "\n" + "\n" + "A idade informada de " + ano + " anos, " + mes + " meses e " + dia + " dias." + "\n" + "Equivalem, a aproximadamente " + quantidadeDias + " dias.")
}

converterEmDias(idadeAno, idadeMes, idadeDia)

//As questões 2 e 3, rodam no console, assim basta utilizar o node para rodar, ou colocar no codepen para rodar.

//2) Faça uma função que conte de 1 a 100 e a cada múltiplo de 7 escreva no console a mensagem: “Múltiplo de 7”.

console.log("\n" + "Questão 2" + "\n")

function multiploDeSete(){
    for(let i = 1; i <= 100; i++){
        i % 7 == 0 ? console.log(i + " - Múltiplo de 7") : console.log(i)
    }
}

multiploDeSete()

//3) Faça uma função que repita a palavra arara 230 vezes.

console.log("\n" + "Questão 3" + "\n")

function repetirArara(){
    for(let i = 1; i <= 230; i++){
        console.log(i + " - Arara")
    }
}

repetirArara()