function isPrime(n) {
     if (n < 2) return false;
     for (let i = 2; i < n; i++) { 
         if (n % i === 0) return false; 
     }
     return true;
 }
 
 const num = 5; 
 if (isPrime(num)) {
     console.log(`${num} is a Prime Number.`);
 } else {
     console.log(`${num} is NOT a Prime Number.`);
 }
 