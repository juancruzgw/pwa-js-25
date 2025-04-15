/*6. Clasificador de clientes premium
Pedile al usuario:

Cantidad de compras que hizo este mes
Monto total gastado
Condiciones:

Es cliente "Premium" si hizo más de 10 compras y gastó más de $100.000
Es "Regular" si hizo al menos 5 compras o gastó más de $50.000
En otro caso, es "Básico"
Mostrá un mensaje como: Cliente Premium: gracias por tu fidelidad!!*/

// datos ficcticios 
let cantidadCompras = 12;
let montoGastado = 9000;

const clasificarCliente = (compras, gasto) => {
    let msj = ""
    if (compras > 10 && gasto > 100000) {
        msj = "Cliente Premium";
    } else if (compras >= 5 || gasto > 50000) {
        msj = "Cliente Regular";
    } else {
        msj =  "Cliente Básico";
    }
    return msj;
}

console.log(clasificarCliente(cantidadCompras, montoGastado));
// salida: Cliente Regular