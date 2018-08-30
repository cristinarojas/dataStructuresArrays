// We have to create an array and then make each element of the array
// an array as well [[30], [30], [30], [30], [30]]

// using Array.matrix
// We can do this with a function that recive the number of rows and columns and value
// and sets each value to a value passed to the function

Array.matrix = (numRows, numColumns, value) => {
  var twodimensionalArray= [];

  for (var i = 0; i < numRows; i++) {
    var columns = [];

    for (var j = 0; j < numColumns; j++) {
      columns[j] = value;
    }

    twodimensionalArray[i] = columns;
  }

  return twodimensionalArray;
};

var myMatrix = Array.matrix(2, 2, 30); // rows, columnas, value
document.writeln(myMatrix); // 30,30,30,30

// col1   col2
/* [[30], [30] // row 1
   [30], [30]] // row 2
*/

var myMatrix = Array.matrix(4, 3, 30); // rows, columnas, value
document.writeln(myMatrix); // 30,30,30,30,30,30,30,30,30,30,30,30

//   col1  col2  col3
/*  [[30], [30], [30] // row 1
    [[30], [30], [30] // row 2
    [[30], [30], [30] // row 3
    [[30], [30], [30] // row 4
*/
