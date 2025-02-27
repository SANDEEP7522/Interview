
// let a = 5;
// let b = 10;    

// let temp = a; 
// a = b; 
// b = temp;

// console.log('value of a',a);
// console.log('value of b',b); 

function swap(a, b) {
     let temp = a;
     a = b;
     b = temp;
     return [a, b];
   }
console.log('value of a and b', swap(5, 10));
   

   function swap(a, b) {
     [a, b] = [b, a];
     return [a, b];
   }
   console.log(swap(1, 2));
   
   
//    let a = 5;
//    let b = 10;

//    [a, b] = [b, a];

//    console.log('value of a', a);
//    console.log('value of b', b);

   function swap(a, b) {
     a = a + b;
     b = a - b;
     a = a - b;
     return [a, b];
   }
   console.log(swap(5, 6));
   

//    let x = 1;
// let y = 2;
// [x, y] = swap(x, y);
// console.log(x); // prints 10
// console.log(y); // prints 5