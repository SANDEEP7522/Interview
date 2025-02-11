// var x = 10;
if (true) {
  var x = 20;  // Same 'x' variable gets reassigned
}
console.log(x); // 20



// let x = 10;
if (true) {
  let x = 20;  // This 'x' is block-scoped
  console.log(x); // 20
}
console.log(x); // 10



// const x = 10;
// x = 20;  // Error: Assignment to constant variable.

const obj = { name: "Sandeep" };
obj.name = "Sachin";  // Allowed, as the object itself is mutable
console.log(obj.name); // "Sachin"

