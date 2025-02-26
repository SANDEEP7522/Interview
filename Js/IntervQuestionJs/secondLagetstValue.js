const arr = [2, 8, 9, 7]

const largestNumber = (arr) => {
     firstLargetstValue = Math.max(...arr);
     index = arr.indexOf(firstLargetstValue);
     arr.splice(index, 1);
     secondLargetstValue = Math.max(...arr);

     return (firstLargetstValue, secondLargetstValue); 
}

console.log(largestNumber(arr));
