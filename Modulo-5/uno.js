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

- datos de la película //busco "peliculas" directamente  ✅
- directores como objetos con nombre // buscar en "director" ✅
- géneros como objetos con nombre // buscar desde genero ✅
- todas sus críticas con:     🥴  creo que hay que armar array con eso
-      datos del crítico // buscar desde calificacione (calificaciones.id == peli.id) => el critico id ✅
-       país del crítico // aca desde critico con el id.critico anterior 
Si no existe la película, devolver undefined. 

diiablo q dificl 😫
*/
const verInfoPelicula = (nombre) => {
  
  let datosPeli = base.peliculas
  let laBuscada = datosPeli.find(peli => peli.nombre === nombre)
  if (!laBuscada){
    return undefined
  }
  let info = {}
  //console.log(laBuscada )
  if (laBuscada){
    let idPelicula = laBuscada.id //laBuscada.id
    let directores = base.directores // id y nombre
    let generos = base.generos // id y nombre
    let calificaciones = base.calificaciones // idcritico y idpeli y puntuacion
    let criticos = base.criticos
    let nombresGeneros = []
    let infoCritico = []
    
    
    info = {nombre: laBuscada.nombre, 
          anio: laBuscada.anio,} 
          laBuscada.directores.forEach(dire =>{
            const posibleDire = directores.find(direc => direc.id == dire)
           // console.log(posibleDire)
            // sin ...info me pisaba lo anterior :( // es como el += de un string :)
            info = {...info, director: posibleDire.nombre } // si encuentra 2 o mas va a poner el ultimo :C
          
        } )
        laBuscada.generos.forEach(gener => {
          const genero = generos.find(gene => gene.id == gener) // el .find me devolvia un obj 🤬😡😡 , no lo podia recorrer
          nombresGeneros = [...nombresGeneros, genero.nombre] // tendria que hacerlo en el anterior, ya que retornaba el ultimo genero que recorria
          //console.log(nombresGeneros)
          if (nombresGeneros.length > 0){
            info = {...info, Generos: nombresGeneros}
          }
        })
        calificaciones.forEach( cali => {
          if (cali.pelicula === idPelicula){
            criticos.filter(criti => {
              return criti.id === cali.critico 
            }).map (critico => {
      
              infoCritico = [...infoCritico,critico.nombre]
              info = {...info, Criticos: infoCritico }
            })
          }
        })
  }
 
return info

}


console.log(verInfoPelicula ("Interstellar")) 

/**{
  nombre: 'Interstellar',
  anio: 2014,
  director: 'Christopher Nolan',
  Generos: [ 'Ciencia Ficcion', 'Suspenso' ]
  Criticos: [ 'Jean-Luc Picard', 'Ana María Orozco' ]


  console.log(verInfoPelicula ("asdfasd")) // ReferenceError: info is not defined
} */