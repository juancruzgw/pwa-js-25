//3. ¿Qué muestra el siguiente código por consola? Explicá paso a paso por qué.

console.log(a); // undefined 
console.log(b); // Cannot access 'b' before initialization
var a = 5;
let b = 10;

//Porque var se va hasta arriba y se inicializa como undefined, 
// pero let sube sin inicializar y no se puede usar antes de su declaración. 
// Por eso var a es undefined y let b tira error.