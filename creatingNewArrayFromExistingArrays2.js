// splice() "empalmar" creates a new array by adding new content while removing existing
// the arguments are the staring position for taking the splice
// and the number of elements to take from the existing array.

var names = ["cristina", "elizabeth", "rojas", "zamora", "nayeli", "valentina", "rojas", "zamora"];
var result = names.splice(3,3);

console.log(result); // ["zamora", "nayeli", "valentina"]
