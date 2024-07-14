// Activity 1: Variable declaration.

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num = 10;
console.log(num);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let str = "Hello, World!";
console.log(str);

// Activity 2: Constant declaration.

// Task 3: Declare a constant using const, assign it a boolean, and log the value to the console.
const isLogged = true;
console.log(isLogged);

// Activity 3: Data types.

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using typeof operator.
const name = "Shakhawat Hossen";
const age = 25;
const isStudent = true;
const knowledge = ["html", "css", "javasctipt", "c", "c++", "mongodb"];
const myInfo = {
  name: "Shakhawat Hossen",
  age: 25,
  email: "shsourov2000@gmail.com",
  phone: "01706695915",
  study: "B.Sc in CSE",
};
console.log("Type of name variable: ", typeof name);
console.log("Type of age variable: ", typeof age);
console.log("Type of isStudent variable: ", typeof isStudent);
console.log("Type of knowledge variable: ", typeof knowledge);
console.log("Type of myInfo variable: ", typeof myInfo);

// Activity 4: Reassigning Variables.

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let x = 10;
console.log("Initial value: ", x);
x = 20;
console.log("Reassign value: ", x);

// Activity 5: Understanding const.

// Task 6: Try to reassigning a variable declared with const and observe the error.
const y = 10;
// y = 20;
console.log(y);

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
const name1 = "Shakhawat Hossen";
const age1 = 25;
const isStudent1 = true;
const knowledge1 = ["html", "css", "javasctipt", "c", "c++", "mongodb"];
const myInfo1 = {
  name: "Shakhawat Hossen",
  age: 25,
  email: "shsourov2000@gmail.com",
};
console.log("Name: ", name1, "Type: ", typeof name1);
console.log("Age: ", age1, "Type: ", typeof age1);
console.log("Is Student: ", isStudent1, "Type: ", typeof isStudent1);
console.log("Knowledge: ", knowledge1, "Type: ", typeof knowledge);
console.log("My Info: ", myInfo1, "Type: ", typeof myInfo1);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
let a = 10;
console.log("Initial value of a: ", a);
a = 20;
console.log("Reassign value of a: ", a);
const b = 10;
// b = 20;
console.log("Initial value of b: ", b);
// The difference between let and const is that let can be reassigned but const can't be reassigned.

// Today's Achievement:
// * Know how to declare a variable using var, let, and const.
// * Understand the difference data types in JavaScript.
// * Be able to use the typeof operator to identify the data type of a variable.
// * Understand the concept of variable reassignment and the immutability of const variables.
