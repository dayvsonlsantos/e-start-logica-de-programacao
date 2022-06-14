/*

1) O inverno é uma estação maravilhosa, não é? Aquele fiozinho é bom demais. Faça uma função que represente as situações abaixo em que o humor das pessoas é definido de acordo com as tendências climáticas. Com base nas temperaturas dos últimos três dias, as pessoas podem estar tristes ou felizes.

●        Se a temperatura diminuiu do 1º para o 2º dia, mas aumentou ou permaneceu constante do 2º para o 3º , as pessoas ficam felizes (primeira figura).

●        Se a temperatura aumentou do 1º para o 2º dia, mas diminuiu ou permaneceu constante do 2º para o 3º , as pessoas ficaram tristes (segunda figura).

●        Se a temperatura aumentou do 1º para o 2º dia e do 2º para o 3º , mas aumentou do 2º para o 3º menos do que aumentou do 1º para o 2º , as pessoas estão triste (terceira figura).

●        Se a temperatura aumentou do 1º para o 2º dia e do 2º para o 3º , mas aumentou do 2º para o 3º pelo menos o que aumentou do 1º para o 2º , as pessoas estão felizes (quarta figura).

●        Se a temperatura diminuiu do 1º para o 2º dia e do 2º para o 3º , mas diminuiu do 2º para o 3º menos do que diminuiu do 1º para o 2º , as pessoas estão felizes (quinto dígito).

●        Se a temperatura diminuiu do 1º para o 2º dia e do 2º para o 3º , mas diminuiu do 2º para o 3º pelo menos o que havia diminuído do 1º para o 2º , as pessoas estão triste (sexta figura).

●        Se a temperatura permanecer constante do 1º ao 2º dia, as pessoas ficam felizes se a temperatura aumentou do 2º para o 3º ou triste caso contrário (respectivamente, sétimo e oitavo dígitos).

*/

alert("Favor, a seguir, informar as temperaturas dos últimos 3 dias")

var dia1 = Number(prompt("Informe a temperatura do 1º dia: "))
var dia2 = Number(prompt("Informe a temperatura do 2º dia: "))
var dia3 = Number(prompt("Informe a temperatura do 3º dia: "))

function medindoHumor(temperaturaDia1, temperaturaDia2, temperaturaDia3){
    
    let humor = ""

    if ((temperaturaDia2 < temperaturaDia1) && (temperaturaDia3 >= temperaturaDia2)){
        humor = "1ª Figura: Feliz"
    }else if((temperaturaDia2 > temperaturaDia1) && (temperaturaDia3 <= temperaturaDia2)){
        humor = "2ª Figura: Triste"
    }else if((temperaturaDia3 > temperaturaDia2) && (temperaturaDia2 > temperaturaDia1)){  
        humor = (Math.abs((temperaturaDia3 - temperaturaDia2)) < Math.abs((temperaturaDia2 - temperaturaDia1))) ? "3ª Figura: Triste" : "4ª Figura: Feliz"
    }else if(((temperaturaDia3 < temperaturaDia2) &&(temperaturaDia2 < temperaturaDia1))){     
        humor = (Math.abs((temperaturaDia2 - temperaturaDia3)) < Math.abs((temperaturaDia1 - temperaturaDia2))) ? "5ª Figura: Triste" : "6ª Figura: Feliz"
    }else if((temperaturaDia2 == temperaturaDia1)){
        
        humor = (temperaturaDia3 > temperaturaDia2) ? "7ª Figura: Feliz" : humor = "8ª Figura: Triste"
        
    }else{
        humor = "Não foi possível calcular"
    }

    return humor
}

alert("O humor das pessoas com a variação de temperatura desses 3 dias é equivalente a: " + medindoHumor(dia1, dia2, dia3))