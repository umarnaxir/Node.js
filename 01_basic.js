var a = 10; // function scope variable
let b = 20; // block scope variable
const c = 30;

a = 100;
b = 200;
// c = 300; // this will give an error because const value cannot be changed

console.log(a + b + c);

//How to Use Conditions and Loops
if (a == 200) {
  console.log("this is if condition");
} else {
  console.log("this is else condition");
}

//Function Example
function fruit(item) {
  console.log("fruit is " + item);
}

fruit("apple");
fruit("banana");

//For Loop
for (var a = 0; a <= 10; a++) {
  console.log(a);
}

//While Loop
var a = 0;
while (a <= 10) {
  console.log(a);
  a++;
}

//How to Use Arrays and Objects
var user = ["anil", "sam", "peter", "bruce"];

for (var a = 0; a < user.length; a++) {
  console.log(user[a]);
}

//Object Example
var user = {
  name: "Umar",
  city: "Kashmir",
  age: 23,
};

console.log(user.name);
console.log(user.city);
console.log(user.age);
