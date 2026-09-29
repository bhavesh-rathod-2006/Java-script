// Assignment 5: Objects, Arrays, and Functions

// ---------------- Part A : Object ----------------

let student = {
  name: "Bhavesh Rathod",
  age: 19,
  isEnrolled: true
};

console.log("Student Object:", student);
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);

// ---------------- Part B : Array ----------------

let numbers = [10, 20, 30, 40, 50];

let mixed = [100, "Hello", true, null];

console.log("First Element:", numbers[0]);
console.log("Last Element:", numbers[numbers.length - 1]);

console.log("Mixed Array:", mixed);

/*
Why keep arrays with a single data type?

Arrays with one data type are easier to read, manage, sort, and perform calculations on.
They also make the code more organized and reduce errors.
*/

// ---------------- Part C : Function ----------------

function greet(name) {
  return "Hello, " + name + "!";
}

let message1 = greet("Bhavesh");
let message2 = greet("Rohan");

console.log(message1);
console.log(message2);