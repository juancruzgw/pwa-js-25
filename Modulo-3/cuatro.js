/**4. Batalla por turnos con estrategia real
Simulá una batalla entre vos y un enemigo controlado por la computadora. El objetivo es ganar al final de los 5 turnos teniendo más vida que el oponente.

Objetivo
Llegar al final del combate con más puntos de vida que el enemigo. 
La partida termina tras 5 turnos o si alguno de los participantes alcanza 0 puntos de vida o menos.

Reglas del juego
Ambos comienzan con 100 puntos de vida.
Se juegan 5 turnos.
En cada turno:
Vos elegís si atacar o defender usando prompt().
El enemigo elige su acción al azar.
Cada acción genera valores aleatorios para ataque, defensa y crítico.

Resolución de cada turno:
Jugador/Enemigo	Resultado
Ataca / Ataca	Ambos reciben daño completo.
Ataca / Defiende	El enemigo reduce el daño a la mitad. Vos no recibís daño.
Defiende / Ataca	Vos reducís el daño a la mitad. El enemigo no recibe daño.
Defiende / Defiende	Nadie recibe daño.
El daño se calcula usando la función que considera ataque, defensa y posibilidad de golpe crítico del ejercicio 1.

Al final del turno se muestra un mensaje narrando lo ocurrido, por ejemplo:

// Ejemplo de mensajes de turno:
// Turno 3: Atacaste con 52. El enemigo se defendió con 40. ¡Le hiciste 12 de daño!
// Turno 4: Defendiste con 38. El enemigo atacó con 50. ¡Bloqueaste parte del daño! Recibiste 6.
Resultado final
Después de 5 turnos o cuando uno de los participantes pierda todos sus puntos de vida se muestra:

Vida final del jugador
Vida final del enemigo
Resultado:
Si tenés más vida → Ganaste la batalla!
Si tenés menos vida → Perdiste!
Si empataron → Empate! */

//let ataco = true;
//let defiendo = false

let vidaUser = 100;
let vidaPc = 100;

function jugadaEnemiga () {
   let n = 0;
   let ataca = false;
    n = Math.floor((Math.random() * 100)+ 1) // 1 a 100
    n > 50 ? ataca = true : false

}
jugadaEnemiga ()