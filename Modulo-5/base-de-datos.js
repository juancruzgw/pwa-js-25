export const basededatos = {
        peliculas: [
          {
            id: 1,
            nombre: "Matrix",
            anio: 1999,
            direccionSetFilmacion: {
              calle: "Calle Falsa",
              numero: 123,
              pais: "Argentina"
            },
            directores: [2],
            generos: [1, 2]
          },
          {
            id: 2,
            nombre: "Inception",
            anio: 2010,
            direccionSetFilmacion: {
              calle: "Dream Street",
              numero: 456,
              pais: "Estados Unidos"
            },
            directores: [3],
            generos: [1, 3]
          },
          {
            id: 3,
            nombre: "Interstellar",
            anio: 2014,
            direccionSetFilmacion: {
              calle: "Space Road",
              numero: 789,
              pais: "Estados Unidos"
            },
            directores: [3],
            generos: [1, 3]
          },
          {
            id: 4,
            nombre: "The Matrix Reloaded",
            anio: 2003,
            direccionSetFilmacion: {
              calle: "Calle Falsa",
              numero: 123,
              pais: "Argentina"
            },
            directores: [2],
            generos: [1, 2]
          },
          {
            id: 5,
            nombre: "Avatar",
            anio: 2009,
            direccionSetFilmacion: {
              calle: "Pandora Avenue",
              numero: 101,
              pais: "Estados Unidos"
            },
            directores: [4],
            generos: [1, 3]
          },
          {
            id: 6,
            nombre: "The Dark Knight",
            anio: 2008,
            direccionSetFilmacion: {
              calle: "Gotham Street",
              numero: 202,
              pais: "Estados Unidos"
            },
            directores: [3],
            generos: [2, 3]
          },
          {
            id: 7,
            nombre: "Jurassic Park",
            anio: 1993,
            direccionSetFilmacion: {
              calle: "Dinosaur Lane",
              numero: 303,
              pais: "Estados Unidos"
            },
            directores: [5],
            generos: [1, 2]
          },
          {
            id: 8,
            nombre: "Titanic",
            anio: 1997,
            direccionSetFilmacion: {
              calle: "Ocean Drive",
              numero: 404,
              pais: "Estados Unidos"
            },
            directores: [6],
            generos: [3]
          },
          {
            id: 9,
            nombre: "The Lord of the Rings: The Fellowship of the Ring",
            anio: 2001,
            direccionSetFilmacion: {
              calle: "Middle Earth Road",
              numero: 505,
              pais: "Nueva Zelanda"
            },
            directores: [7],
            generos: [1, 3]
          }
        ],
        directores: [
          { id: 2, nombre: "Lilly Wachowski" },
          { id: 3, nombre: "Christopher Nolan" },
          { id: 4, nombre: "James Cameron" },
          { id: 5, nombre: "Steven Spielberg" },
          { id: 6, nombre: "James Cameronee" },
          { id: 7, nombre: "Peter Jackson" }
        ],
  generos: [
    { id: 1, nombre: "Ciencia Ficcion" },
    { id: 2, nombre: "Accion" },
    { id: 3, nombre: "Suspenso" }
  ],
  criticos: [
    { id: 1, nombre: "Pipo Gorosito", edad: 60, pais: "Argentina" },
    { id: 2, nombre: "Roger Ebert", edad: 70, pais: "Estados Unidos" }
  ],
  calificaciones: [
    { critico: 1, pelicula: 1, puntuacion: 8 },
    { critico: 2, pelicula: 4, puntuacion: 10 },
    { critico: 4, pelicula: 3, puntuacion: 7 },
    { critico: 3, pelicula: 2, puntuacion: 5 },
    { critico: 1, pelicula: 1, puntuacion: 8 },
    { critico: 2, pelicula: 2, puntuacion: 6 },
    { critico: 4, pelicula: 4, puntuacion: 5 },
    { critico: 3, pelicula: 3, puntuacion: 9 }
  ]
};

export default basededatos;
