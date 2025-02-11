const array = [1, 2, 3, 5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const evenNumber = array.filter((item) => {
     return item % 2 === 0; 
})
const oddNumber = array.filter((item) => {
     return item % 2 !== 0; 
})

console.log('even numbers', evenNumber);
console.log('odd numbers', oddNumber);
