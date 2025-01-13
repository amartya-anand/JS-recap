function sum(a, b) {
  return a + b;
}

console.log(`The sum is ${sum(1, 2)}`);

let sum1 = (a, b) => {
  return a + b;
};
console.log(`The sum is ${sum1(5, 4)}`);

let sum2 = (a, b) => a + b;
console.log(`The sum is ${sum1(3, 4)}`);
