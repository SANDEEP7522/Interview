let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = mergeArray(arr1, arr2);
console.log("Array 1", arr1, "Array 2", arr2, "Merged Array", mergedArray);

let arr01 = [1, 2, 3];
let arr02 = [4, 5, 6];
let merged = arr01.concat(arr2);
console.log("01 & 02", merged);

function mergeArray(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}

console.log("using for loop", mergeArray(arr1, arr2));

function mergeArray(arr1, arr2) {
  arr1.push(...arr2);
  return arr1;
}
console.log("using spread operator", mergeArray(arr1, arr2));

function mergeArray(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log("using spread operator", mergeArray(arr1, arr2));

function mergeArray(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log("using concat", mergeArray(arr1, arr2));
