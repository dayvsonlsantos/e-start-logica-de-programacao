//Desafio: Faça uma função que escreve os números de 1 a 10 em ordem crescente

function exibirNumerosOrdemCrescente(arrayNumeros){
    arrayNumeros.sort(compare); //Método para ordenar os valores
    
    for (let i = 0; i <= arrayNumeros.length -1; i++){
      console.log(arrayNumeros[i])
    }
  }
  
  //Função para order os valores, pois caso contrário, seguirá a ordem de classificação com base nos valores dos pontos de código Unicode dos elementos (como se fossem strings) 
  function compare(a,b){
    if (a > b) {
      return 1
    }else if (a < b) {
      return -1
    }else{
      return 0
    }
  }
  
  
  let numerosSemOrdem = [2, 5, 6, 9, 10, 3, 8, 4, 1, 7]
  console.log("Ordenando o array [2, 5, 6, 9, 10, 3, 8, 4, 1, 7]: ")
  exibirNumerosOrdemCrescente(numerosSemOrdem)