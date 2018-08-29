// A better alternative is create a deep copy of the array.
// each element is actually copied to the new arrays element.
// We need to create a function for this.

let copy  = (array1, array2) => {
  for(var i = 0; i < array1.length; i++) {
    array2[i] = array1[i];
  }
}

// Original array
var nums = [];
for(var i = 0; i < 5; i++) {
  nums[i] = i+1;
}

var someNums = [];

// Copy the original array to the new arrray with the function
copy(nums, someNums);

// Modifing the original array
nums[0] = 400;

// When we create a deep copy of the array and if we modify the array these arrays dot not affect each others.
// Just are afecting the array where is affeting
console.log(someNums); // [1, 2, 3, 4, 5]
console.log(nums); //  [400, 2, 3, 4, 5]
