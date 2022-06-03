/*

3)      Sabendo que A=5, B=4 e C=3 e D=6, informe se as expressões abaixo são verdadeiras ou falsas.

a)       (A > C) AND (C <= D)                       

b)      (A + B) > 10 OR (A + B) = (C + D)                 

c)       (A >= C) AND (D >= C)                   

d)      (B > D) AND (A <= C)                     

e)      (D <= A) OR (C >= B)          

*/

var a = 5
var b = 4
var c = 3
var d = 6

// Letra A

if (a > b && c <= d) {
    var resultadoA = true
}else{
    var resultadoA = false
}

// Letra B

if ((a + b) > 10 || (a + b) == (c + d)) {
    var resultadoB = true
}else{
    var resultadoB = false
}

// Letra C

if ((a >= c) && (d >= c)) {
    var resultadoC = true
}else{
    var resultadoC = false
}

// Letra D

if ((b > d) && (a <= c)) {
    var resultadoD = true
}else{
    var resultadoD = false
}

// Letra E

if ((d <= a) || (c >= b)) {
    var resultadoE = true
}else{
    var resultadoE = false
}

alert("A=5, B=4 e C=3 e D=6" + "\n" + "\n" + "A) (A > C) AND (C <= D) -> " + resultadoA + "\n" + "B) (A + B) > 10 OR (A + B) = (C + D) -> " + resultadoB + "\n" + "C) (A >= C) AND (D >= C) -> " + resultadoC + "\n" + "D) (B > D) AND (A <= C) -> " + resultadoD + "\n" + "E) (D <= A) OR (C >= B) -> " + resultadoE)