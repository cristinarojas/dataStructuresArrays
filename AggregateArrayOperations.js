// We can create an array from another array
var nums = [];

for (var i = 0; i < 10; i++) { //  go through the array position 0 to 9
  nums[i] = i+1; // sums 1 in 1
}

// assigned array = reference;
var someNums = nums; // shallow copy: just assigning a reference to the assigned array

console.log(nums); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(someNums); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// When we do a shallow copy, if the original array is modified then the assigned arrya
// also is modified
nums[0] = 300;

console.log(nums); // [300, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(someNums); // [300, 2, 3, 4, 5, 6, 7, 8, 9, 10]


someNums[1] = 400;
console.log(nums); // [300, 400, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(someNums); // [300, 400, 3, 4, 5, 6, 7, 8, 9, 10]
