// The concat() allows you to put together two or more arrays to create a to create a new array.
// The splice() allows you to create a new array from a subset of an existing array.

var names = ["cristina", "elizabeth"];
var lastNames = ["rojas", "zamora"];

var resultArray = names.concat(lastNames);

console.log(resultArray); //  ["cristina", "elizabeth", "rojas", "zamora"]

var resultOtherArray = lastNames.concat(names);

console.log(resultOtherArray); // ["rojas", "zamora", "cristina", "elizabeth"]
