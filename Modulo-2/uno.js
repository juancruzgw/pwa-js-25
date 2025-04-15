//1. Validador de edad para cine
//Tenés dos variables:



//Escribí un programa que pida al usuario su edad y muestre "Puede entrar al cine" si la persona tiene 18 o más años. En caso contrario, mostrar "No puede entrar".

// const edad = Number(prompt("¿Cuál es tu edad?"));
let edad = 19;
let tieneAutorizacion = false;

if (edad >= 18) {
  console.log("Puede entrar al cine");
  tieneAutorizacion = true;
} else {
  console.log("No puede entrar");
}
// salida: Puede entrar al cine