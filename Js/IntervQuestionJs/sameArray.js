let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

let sameArray = [];
arr1.forEach(element => {
  if (arr2.includes(element)) {
    sameArray.push(element);
  }
});
console.log(sameArray); 



let arr01 = [1, 2, 3, 4, 5];
let arr02 = [3, 1, 66, 17, 18];

let sameArrays = arr01.filter(element => arr02.includes(element));
console.log(sameArrays); 



let a1 = [11, 12, 13, 41, 51];
let a2 = [41, 51, 16, 17, 18];

let sameA = [];
a1.forEach(element => {
  if (a2.includes(element)) {
    sameA.push(element);
  }
});
console.log(sameA);