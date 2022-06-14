/*

1 - Faça uma função que exibe a sequência abaixo usando as especificações:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, …


a)       Exibir os 100 primeiros números da sequência da acima.

b)      O primeiro valor é 0.

c)       O segundo valor é 1.

d)      O terceiro valor em diante é o resultado da soma de valores, por exemplo:

Se somar o primeiro valor e o segundo, o resultado é 1.

Se somar o segundo valor e o resultado da soma anterior,  o novo resultado será 2, e assim por diante.

*/

function sequencia(){
  
    let valores = []
    
    valores[0] = 0
    valores[1] = 1
    valores[2] = 1
    
    let n1 = 1
    let n2 = 1
    let soma = 0
    let cont = 3
    
    while (cont < 100){
      soma = n1 + n2
      
      n1 = n2
      n2 = soma
      
      valores[cont] = soma
      
      cont++
    }
    return valores
  }
  
  
  fibonacci = sequencia()
  
  for(let i = 0; i < 100; i++){
    console.log(fibonacci[i])
  }
  