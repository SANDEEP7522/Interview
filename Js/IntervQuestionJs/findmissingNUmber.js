
const arr = [1, 2, 4, 5, 7, 8, 9];
const missing = []
const missingNumber = (arr) => {
   const min = Math.min(...arr);
   const max = Math.max(...arr);
   for (let i = min; i <= max; i++) {
      if (!arr.includes(i)) {
         missing.push(i);
      }
   }
   return missing;
}

console.log(missingNumber(arr));