const empArray = [
  { name: "Sandeep", age: 20, id: 1 },
  { name: "Sandeep sahu", age: 18, id: 2 },
  { name: "Anupam", age: 20, id: 3 },
  { name: "Anurag", age: 19, id: 4 },
  { name: "Abhishekh", age: 21, id: 5 },
  { name: "Vijay", age: 20, id: 6 },
  { name: "Sachin", age: 22, id: 7 },
  { name: "Shivang", age: 17, id: 8 },
  { name: "Rohit", age: 21, id: 9 },
];

// filter provide all eloement according to condition
const filteredByAgeGreater = empArray.filter((item) => {
  return item.age >= 20;
});

// find method provide one element 
const findByAgeSmaller = empArray.find((item) => {
  return item.age <= 20;
});
const filteredByAgeSmaller = empArray.filter((item) => {
  return item.age <= 20;
});

console.log("filtered By Age Gretor", filteredByAgeGreater);

console.log("filtered By Age Smaller", filteredByAgeSmaller);

console.log("find By Age Smaller", findByAgeSmaller);

// console.log(empArray);
