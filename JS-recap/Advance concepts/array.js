let myArray = [1, 2, 3, "pop", { name: "John" }];

// console.log(myArray); // 1

// for (i = 0; i <= 4; i++) {
//   console.log(myArray[i]);
// }

myArray.forEach(function (array) {
  console.log(array);
});

console.log(Array.isArray(myArray));
console.log(myArray.length);
