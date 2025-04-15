//4. Validador de ingreso a un club secreto
// Pedile al usuario su edad y si conoce la "palabra clave".

//Solo puede ingresar si:

//Tiene 21 años o más
//Y escribió exactamente "snorlax" como palabra clave
//Mostrá un mensaje acorde:

//const edad = Number(prompt("¿Cuál es tu edad?"));
//const clave = prompt("Decí la palabra clave:");

// tu código acá
//DATOS HIPOTETICOS
let anios = 19;
let palabraSecreta = "snorlax"
// salida Pasa papá 😎


function validaEntrada (edad, clave) {
   return edad >= 18 && clave == "snorlax" ? true : false;
}
if (!validaEntrada (anios, palabraSecreta)){
    console.log("Tu edad no es suficiente, o la palabra secreta es incorrecta!!");
} else {
    console.log("Pasa papá 😎") ;
}
