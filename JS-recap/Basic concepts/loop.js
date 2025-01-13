let count = 0;

while (count < 10) {
  count = count + 1;
  console.log(`The number is :${count}`);
}
console.log("Out of the loop");

for (i = 0; i < 10; i++) {
  console.log(`${i + 1}`);
}

//Anonymous function

setTimeout(function () {
  console.log("Hello World");
}, 1000);

function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 1000);
