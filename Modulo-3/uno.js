//1. Calculadora de daño
//Creá una función calcularDanio(ataque, defensa, critico) que reciba:

//ataque: poder del atacante
//defensa: defensa del rival (se resta al ataque para calcular el resultado)
//critico: booleano que duplica el daño si es true
//Si el resultado es menor a 0, debe devolver 0.

//calcularDanio(50, 30, true) // → 70


function calcularDanio (ataque, defensaRival, critico) {

    let resultado = 0;
    resultado = ataque - defensaRival
    if (critico){
        resultado += ataque 
    }
    return resultado
}

console.log(calcularDanio(50, 30, true)) // salida: 70