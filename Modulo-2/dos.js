//2. Calculadora de propina
//Simula que tenés una cuenta de un restaurante y queres calcular la propina. 
// Declarar una variable monto, pedirle al usuario que ingrese un valor y calcular la propina del 10%.

//Mostrá un mensaje como: "El total es $100. La propina sugerida es $10"

//const monto = Number(prompt("¿Cuál es el monto de la cuenta?"));
//const propina = monto * 0.1;
//console.log(`El total es $${monto}. La propina sugerida es $${propina}`);

let valorDelUsuario = 2000;

function calculaPropina (valor){
    let sugerido = 0
    sugerido = valor * 0.1
    return (`El total es $${valor}. La propina sugerida es $${sugerido}`);
}

console.log(calculaPropina (valorDelUsuario))
// salida El total es $2000. La propina sugerida es $200