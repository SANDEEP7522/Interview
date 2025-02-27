var a = [1, 2, 3, 4, 5, 6];
var b = [5, 6, 7, 8, 9];
var unioArrays = [...a, ...b]
console.log([... new Set(unioArrays)]);



function unionArray(arr1, arr2) {
     return arr1.filter(element => !arr2.includes(element)).concat(arr2);
   }
   
   let arr1 = [1, 2, 3, 4, 5];
   let arr2 = [4, 5, 6, 7, 8];
   console.log(unionArray(arr1, arr2));

