//5. Conversor simple de temperatura
//Convertí una temperatura en grados Celsius a Fahrenheit. Mostrá el resultado con un mensaje como "25°C son 77°F".

const celsius = 25;
let fahrenheit = 0;

function conversorCaF (gradosCelcius) {
    // Formula (0 °C × 9/5) + 32 = 32 °F
    fahrenheit = gradosCelcius * 9/5 + 32; 
    return gradosCelcius + "°C son: " +fahrenheit+"°F";
}
console.log(conversorCaF (celsius));

// Salida: 25°C son: 77°F
