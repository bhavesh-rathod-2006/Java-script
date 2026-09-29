// Assignment 9: Best Practices Refactoring

// Good Version of the Code

// Renamed x to count and gave it a default value.
let count = 0;

// Split variables into separate lines with meaningful names.
let firstNumber = 1;
let secondNumber = 2;
let thirdNumber = 3;

// Changed pi to constant and uppercase name.
const PI = 3.14159;

// Renamed username to userName using camelCase.
let userName = "John";

// Renamed itemcount to itemCount using camelCase.
let itemCount = 0;

// Printing values
console.log("Count:", count);
console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);
console.log("Third Number:", thirdNumber);
console.log("PI:", PI);
console.log("User Name:", userName);
console.log("Item Count:", itemCount);

/*
Changes Made

1. x -> count
   Meaningful variable name with default value.

2. a, b, c -> firstNumber, secondNumber, thirdNumber
   Separate declarations improve readability.

3. pi -> PI
   Constant values are written in uppercase.

4. username -> userName
   Used camelCase naming convention.

5. itemcount -> itemCount
   Used camelCase for better readability.
*/