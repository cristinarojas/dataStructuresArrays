// To access the elements of an array.
// this functions returns some representation of the target arrya as their values.

// indexOf() Para ver si el argumento pasado a la función se encuentra en el array
// si el argumento es encontrado en el array entonces retorna la posicion donde se encontrado
// si el argumento no es encontrado en el array entonces retorna un -1

var names = ["cris", "naye", "alma", "karla", "karo", "karla"];

const found = "karla";

var position = names.indexOf(found);

if (position > 0) {
  console.log('se encontro el nombre en la posicion' + ' ' + position); // se encontro el nombre en la posicion 3
}

// Si el elemento se encuentra varias veces en el array entonces indexOf solo
// retornara la primer posicion donde se encontro el elemento buscado.
