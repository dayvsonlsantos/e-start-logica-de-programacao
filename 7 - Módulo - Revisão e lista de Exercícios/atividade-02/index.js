//1) Faça uma função que recebe um valor inteiro e escreva a tabuada de subtração do valor recebido.

console.log("Questão 1")

function tabuadaSub (valor){
  
  let resultado = 0
  
  console.log("Tabuada de subtração do "+ valor)
  
  for(let i = 0; i <= 10; i++){
    resultado = i - valor
    console.log(i + " - " + valor + " = " + resultado)
  }
  
}

var num = parseInt(prompt("Informe um numero: "))
tabuadaSub(num)

//2) Faça uma função que conte de 1 a 100 e a cada múltiplo de 10 escreva no console a mensagem: “Múltiplo de 10”.

//Obs.: Tive que colocar ate 50, pois o codepen não mostra as 3 questões no console, devido a grande quantidade de linhas que são impressas nessa questão.

console.log("Questão 2")

function multiplos(){
  
  let digito = 1;
  
  while(digito <= 50){
    
    if(digito % 10 == 0){
      console.log("Valor: " + digito + ", é múltiplo de 10")
    }else{
      console.log("Valor: " + digito)
    }
    digito++
  }
}

multiplos()

//3) Uma rainha requisitou os serviços de um monge e disse-lhe que pagaria qualquer preço. O monge, necessitando de alimentos , indagou à rainha sobre o pagamento, se poderia ser feito com grãos de trigo dispostos em um tabuleiro de xadrez, de tal forma que o primeiro quadro deveria conter apenas um grão e os quadros subseqüentes , o dobro do quadro anterior. A rainha achou o trabalho barato e pediu que o serviço fosse executado, sem se dar conta de que seria impossível efetuar o pagamento. Faça uma função para calcular o número de grãos que o monge esperava receber. 

console.log("Questão 3")

function graos(){
  let cont = 1
  let valor = 1
  let total = 0
  
  while (cont <= 64){ //64 é a quantidade de quadrados do tabuleiro de xadrez.
    
    total+=valor
    valor = valor*2
    
    cont++
  }
    return total
}

console.log("O monge espera receber " + graos() + " grãos de trigo.")