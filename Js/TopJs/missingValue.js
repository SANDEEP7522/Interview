const array = [1, 2, 3, 4, 7, 8, 9, 10];

const missingNumber = [];

const missingValue = (array) => {
  const maxValue = Math.max(...array);
  const minValue = Math.min(...array);

  for (let i = minValue; i < maxValue; i++) {
    if (!array.includes(i)) {
      missingNumber.push(i);
    }
  }
  return missingNumber;
};
console.log(missingValue(array));
console.log(array);
