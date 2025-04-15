/**
3. Batalla Pokémon
Creá una función batalla(atacante, defensor, ataque, poder, defensa, critico) 
que use las función calcularDanio del ejercicio 1.

La función debe mostrar:

El mensaje del ataque. Ver formato en el ejemplo

Si el enemigo quedó derrotado (si el daño fue ≥ 50) o sigue en pie.

batalla("Pikachu", "Meowth", "Impactrueno", 70, 20, false);

// Resultado esperado:
// ¡Pikachu usó Impactrueno contra Meowth! Causó 50 de daño.
// ¡Meowth ha sido derrotado! */

// funcion ej 1
function calcularDanio (ataque, defensaRival, critico) {

    let resultado = 0;
    resultado = ataque - defensaRival
    if (critico){
        resultado += ataque 
    }
    return resultado
}
//
function batalla(atacante, defensor, poder,ataque, defensa, critico)  {
    let danioTotal = 0;
    let cadena = "";
    danioTotal = calcularDanio (ataque, defensa, critico)

    cadena = atacante + " uso " + poder + " contra " + defensor +"!!!" + " causo " + danioTotal+ " de daño\n";

    cadena +=  danioTotal >= 50 ? " defensor: "+ defensor+" ha sido derrotado" : defensor+" sigue con vida"
    return cadena;
}

console.log(batalla("Pikachu", "Meowth", "Impactrueno", 70, 20, false))
//Pikachu uso Impactrueno contra Meowth!!! causo 50 de daño
 //defensor: Meowth ha sido derrotado
 console.log(batalla("Charmander", "Squirtle", "Fuego", 40, 30, false));
//Charmander uso Fuego contra Squirtle!!! causo 10 de daño
//Squirtle sigue con vida
