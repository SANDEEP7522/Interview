const arrNumber = [1, 2, 3, 4, 5, 6, 2, 4];

const duplicateNumbers = arrNumber.filter((ele, index, arr) => arr.indexOf(ele) !== index);

console.log(arrNumber);
console.log(duplicateNumbers);
