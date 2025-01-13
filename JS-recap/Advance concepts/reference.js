let student = {
  name: "Amartya",
  age: 26,
  rollNo: 12345,
};

let num = 10;

let num2 = num;
let student2 = student;

console.log(num2);
console.log(student2);

num = 15;
delete student2.age;

console.log(num2);
console.log(student2);
