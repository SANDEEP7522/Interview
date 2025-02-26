const arr = ["S", " a", "n", "d", "e", "e", "p"];
console.log(arr.reverse());

function reverseString(s) {
  return s.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("javascript"));
console.log(reverseString("developer"));
console.log(reverseString("MaMa"));