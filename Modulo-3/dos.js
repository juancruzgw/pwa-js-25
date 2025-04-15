// 2. Evolución de Pokémon
//Creá una función puedeEvolucionar(nombre, nivel) que reciba el nombre del Pokémon y su nivel.

//Reglas de evolución:

//Si es "Charmander" y nivel ≥ 16 → "Charmander evolucionó a Charmeleon"
//Si es "Bulbasaur" y nivel ≥ 15 → "Bulbasaur evolucionó a Ivysaur"
//Si es "Squirtle" y nivel ≥ 18 → "Squirtle evolucionó a Wartortle"
//En otro caso → "Todavía no puede evolucionar"

function puedeEvolucionar(nombre, nivel) {
    let respuesta = "error"
    switch (nombre){
        case 'Charmander': 
        respuesta =  nivel >= 16 ? "Charmander evolucionó a Charmeleon" : "No tiene nivel suficiente para evolucionar"
        break;
        case 'Bulbasur':
        respuesta = nivel >= 15 ? "Bulbasur evolucionó a Charmeleon" : "No tiene nivel suficiente para evolucionar"
        break;
        case 'Squirtle':
        respuesta = nivel >= 18 ? "Squirtle evolucionó a Wartortle" : "No tiene nivel suficiente para evolucionar"
        break;
    }

    return respuesta;
}
console.log(puedeEvolucionar("Charmander", 15)) //No tiene nivel suficiente para evolucionar
console.log(puedeEvolucionar("Bulbasur", 20))   //Bulbasur evolucionó a Charmeleon
console.log(puedeEvolucionar("Squirtle", 19))   //Squirtle evolucionó a Wartortle
console.log(puedeEvolucionar("Pepeee", 10000))  // error