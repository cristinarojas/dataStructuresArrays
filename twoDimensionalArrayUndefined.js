// We have to create an array and then make each element of the array
// an array as well [[], [], [], [], []]

// First we need to know the numbers of rows

var twodimensionalArray = [];
var rows = 5;

for (var i = 0; i < rows; i++) {
  twodimensionalArray[i] = [];
}

console.log(twodimensionalArray); // [[], [], [], [], []]
console.log(twodimensionalArray[0]) // []

// The problem with this aproach is that every element in array is set to undefined
// undefined is declared but not value is defined.
