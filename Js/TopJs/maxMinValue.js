// find max and min value

const nums = [2, 55, 222, 8, 9, 7788, 3, 0];

function findMaxNumber(nums) {
  return Math.max(...nums);
}

function findMinNumber(nums) {
  return Math.min(...nums);
}

console.log(findMaxNumber(nums));

console.log(findMinNumber(nums));
