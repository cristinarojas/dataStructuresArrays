// There 2 functions that return string representation of an array

// join() / toString() returns a string containing the elements of the array delimmited by commas.
var names = ["cristina", "elizabeth", "rojas", "zamora"];

var sentenceJoin = names.join();
var sentenceToString = names.toString();

console.log(sentenceJoin); // cristina,elizabeth,rojas,zamora
console.log(sentenceToString); // cristina,elizabeth,rojas,zamora

var sentenceJoin = names.join(" "); // regresa los elementos del array en cadena separado por espacios
var sentenceJoinDash = names.join("/"); // regresa los elementos del array en cadena separados por /


console.log(sentenceJoin); // cristina elizabeth rojas zamora
console.log(sentenceJoinDash); // cristina/elizabeth/rojas/zamora
