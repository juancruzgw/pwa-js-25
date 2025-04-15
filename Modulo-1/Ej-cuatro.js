//4. ¿Qué tipo es?
//Usá typeof para saber qué tipo de dato es cada uno de los siguientes valores. 
// Después, confirmá tus respuestas ejecutando el código en la consola.

typeof 123
typeof "hola"
typeof true
typeof undefined
typeof null
typeof NaN
typeof {}
typeof []
typeof function() {}
let dato = "123"; // probá cambiar por true, null, {}, etc.

console.log("El tipo de dato es: " + typeof dato);          // Salida: El tipo de dato es: string
console.log("El tipo de dato es: " + typeof function() {}); //El tipo de dato es: function
console.log("El tipo de dato es: " + typeof []);            //El tipo de dato es: object
console.log("El tipo de dato es: " + typeof NaN);           //El tipo de dato es: number
console.log("El tipo de dato es: " + typeof {});            //El tipo de dato es: object
console.log("El tipo de dato es: " + typeof null);          //El tipo de dato es: object
console.log("El tipo de dato es: " + typeof undefined);     //El tipo de dato es: undefined
console.log("El tipo de dato es: " + typeof 123);           //El tipo de dato es: number
console.log("El tipo de dato es: " + typeof "Hola");        //El tipo de dato es: string
console.log("El tipo de dato es: " + typeof true);          //El tipo de dato es: boolean

//¿Alguno te sorprendió? ¿Qué pasa con null, NaN, [] y function?

// Sii, NaN ironicamente es numerico, y null[Objet] el Easter Egg de JavaScript (bug historico)