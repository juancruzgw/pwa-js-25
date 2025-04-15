/**
5. Simulador de sueldo con bonus y retenciones
Pedile al usuario:

Su sueldo base (prompt)
Si tiene bonus (sí o no)
Si tiene hijos (sí o no)
Lógica:

Si tiene bonus, sumá un 10% al sueldo.
Si tiene hijos, restá un 5% por aporte familiar.
Luego, aplicá un 15% de retención final al total.
Mostrá el sueldo neto con un mensaje como: Tu sueldo final es $38.250 */

// valores hipoteticos
let sueldoBase = 1500;
let tieneBonus = false;
let tieneHijos = true;

const calcularSueldo = (sueldo, bonus, hijos) => {

    if (bonus){
        sueldo += sueldo * 0.1
    }
    if (hijos) {
        sueldo -= sueldo * 0.05
    }
    // retencion 
    sueldo -= sueldo * 0.15
    return sueldo

}
console.log(calcularSueldo (sueldoBase, tieneBonus, tieneHijos))
// salida 1211.25