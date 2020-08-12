/*
JavaScript Algorithms and Data Structures Masterclass
digitCount and maxDigitCount

digitCount(num) returns the number of digits in num.

maxDigitCount(nums) given an array of number returns the number of digits in the largest number
*/

const digitCount = (num) => {
  return num.toString().length;
}

const maxDigitCount = (nums) => {
  let max = 0;
  for(let i = 0; i < nums.length; i++) {
    if(digitCount(nums[i]) > max) {
      max = digitCount(nums[i]);
    }
  }

  return max;
}
