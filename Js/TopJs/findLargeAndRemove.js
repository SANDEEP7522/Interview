const arr = [3, 4, 55, 6, 8, 24, 11];

const largeNumber = (arr) => {
     firstLargestValue= Math.max(...arr);
     // firstSmallestValue= Math.min(...arr);
     index = arr.indexOf(firstLargestValue);
     arr.splice(index, 2);
     return (firstLargestValue);
}
console.log(largeNumber(arr));
console.log('deleted this largest value',firstLargestValue,'index' ,index);
console.log(arr);


