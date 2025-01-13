let arr = [1, 2, 3];
let arr2 = [arr];

console.log(arr.length);
console.log(arr2.length);

let arr3 = [...arr2, 4, 5, 6];
console.log(arr3);

// Rest operator - Used to collect all the remaining elements into an array
console.log("Rest operator");
const [first, second, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(first);
console.log(second);
console.log(rest);
