import base from './base-de-datos.js';
//console.log(base.peliculas);
//console.log(base.directores);
/* const imprime = () => {
     console.log(base)
}
imprime() */
//2. Ejercicios sobre la BD
// promedioAnioEstreno() -&gt; 1998.25

const promedioAnioEstreno = (base) => {
     let acumulador = 0;
     let contador = 0;
     let resp = 0;
     base.peliculas.forEach(peli => {
          acumulador += peli.anio
          contador++
     });
     resp = contador > 0 ? acumulador / contador : 0
     return resp;
}


//console.log (promedioAnioEstreno(base)) // 2006.5

//2.2. Películas con buena crítica
//pelicuasConCriticaPromedioMayorA(7) -&gt; [Matrix, Cloud Atlas]

const promedioPorPelicula = (base) => {
     const acumulador = {}; 
   
     base.calificaciones.forEach(calificacion => {
       const idPelicula = calificacion.pelicula;
       const puntuacion = calificacion.puntuacion;
   
       if (!acumulador[idPelicula]) {
         acumulador[idPelicula] = { suma: 0, cantidad: 0 };
       }
   
       acumulador[idPelicula].suma += puntuacion;
       acumulador[idPelicula].cantidad++;
     });
   
     const promedios = {};
   
     for (let idPelicula in acumulador) {
       const { suma, cantidad } = acumulador[idPelicula];
       promedios[idPelicula] = suma / cantidad;
     }
   
     return promedios;
   };

   //console.log(promedioPorPelicula(base));

   const pelicuasConCriticaPromedioMayorA = (param, base) => {
     let array = Object.entries(promedioPorPelicula(base));
     
     const arrayMayor = array
       .filter(peli => peli[1] > param)
       .map(peli => {
         const peliId = parseInt(peli[0]);
         const peliEncontrada = base.peliculas.find(p => p.id === peliId);
         return peliEncontrada ? peliEncontrada.nombre : 'Película desconocida';
       });
       
     return arrayMayor;
   }
   
   //console.log(pelicuasConCriticaPromedioMayorA(6, base));

   // 2.3. Películas dirigidas por alguien
//Escribí una función que reciba el nombre de un director y devuelva todas las películas que dirigió.

//peliculasDeUnDirector("Steven Spielberg") -&gt; [Indiana Jones...]

const peliculasDeUnDirector = (nombre) => {
     let director =  base.directores.find(dire => dire.nombre === nombre)
    
     const peliculasDelDirector = base.peliculas.filter(peli => peli.directores.includes(director.id));

     return peliculasDelDirector.map((peli) => peli.nombre)
}         

//console.log(peliculasDeUnDirector  ("James Cameron")) // Avatar ✅

/**2.4. Promedio de crítica de una película
Escribí una función que reciba el id de una película y devuelva su promedio de puntuaciones.

promedioDeCriticaBypeliculaId(3) -&gt; 6.5 */ 

 const promedioDeCriticaBypeliculaId = (id) => {
    let notas = 0;
    let cont = 0;
    let resp = 0;
    const array = base.calificaciones.filter(cali => {
      if (cali.pelicula == id ){
       
        notas += cali.puntuacion;
        cont ++
        resp = notas / cont
        return resp;
      }
    })
    // const array, no lo uso 😧?
    return resp;
 }
 //console.log(promedioDeCriticaBypeliculaId(2)); //5.5✅

 /**2.5. Películas con al menos una crítica excelente
Devuelve todas las películas que tienen al menos una crítica con puntuación >= 9. */

const notaExcelente = () => {
let name = []
let lasPeli = []
  const array = base.calificaciones.filter(cali => {
      return cali.puntuacion >= 9
      
  }).map (array => {
    lasPeli = base.peliculas.find(peli => peli.id === array.pelicula)
    name.push(lasPeli.nombre)
    return name
  })

/*   if (array.length > 0){
    base.peliculas.map (peli => {
      if (peli.id == array.pelicula){
        name.push(peli.nombre) 
      }
     
    })
    
  } */
return name

}
//console.log(notaExcelente()) // [ 'The Matrix Reloaded', 'Interstellar' ] ✅

/* 2.6. Información expandida de una película
Dado el nombre de una película, devolvé un objeto con toda su información:

- datos de la película
- directores como objetos con nombre
- géneros como objetos con nombre
- todas sus críticas con:
- datos del crítico
- país del crítico
Si no existe la película, devolver undefined. 

diiablo q dificl 😫
*/
const verInfoPelicula = (nombre) => {

  let info = {}
  let datosPeli = base.peliculas
  let laBuscada = datosPeli.find(peli => peli.nombre === nombre)
  if (laBuscada){
    info = {nombre: laBuscada.nombre, 
          anio: laBuscada.anio,} 
          //console.log(info) // busca bien
  }

  


}


verInfoPelicula ("Interstellar")