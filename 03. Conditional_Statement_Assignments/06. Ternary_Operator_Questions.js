//  TERNARY OPERATOR QUESTIONS 

// Write a ternary operator to check whether a given number is divisible by 7. If yes, return "Divisible by 7", otherwise "Not Divisible by 7".


// let num = 21;

// let result = num % 7 === 0 ? "Divisible by 7" : "Not Divisible by 7";

// console.log(result);



// =======================================================

// Question 2


// Using ternary operator, check if the temperature is greater than or equal to 30. Return "Hot Day" or "Pleasant Day".


// let temperature = 32;

// let result = temperature >= 30 ? "Hot Day" : "Pleasant Day";

// console.log(result);




//=============================================================================

// Ques. 3

// Write a ternary expression that checks if a string is empty. Return "Empty String" if it is empty, otherwise "String has content".

// let str = "";

// let result = str === "" ? "Empty String" : "String has content";

// console.log(result);




//======================================================================

// Que. 4 

// Using nested ternary, check a person’s age and return:

// "Child" (age < 13)
// "Teenager" (13–19)
// "Adult" (20 and above)

// let age = 17;

// let result = age < 13
//     ? "Child"
//     : age <= 19
//     ? "Teenager"
//     : "Adult";

// console.log(result);



// ========================================================

// Que. 5  

// Write a nested ternary to find the greater of three numbers (a, b, c) without using Math.max.

// let a = 25;
// let b = 40;
// let c = 30;

// let greater = a > b
//     ? (a > c ? a : c)
//     : (b > c ? b : c);

// console.log("Greater number:", greater);



//=============================================================

// Que. 6 

// Create a nested ternary that classifies a student’s marks as:

// "Distinction" (≥ 75)
// "First Class" (60–74)
// "Second Class" (50–59)
// "Pass" (35–49)
// "Fail" (< 35)


// let marks = 82;

// let result = marks >= 75
//     ? "Distinction"
//     : marks >= 60
//     ? "First Class"
//     : marks >= 50
//     ? "Second Class"
//     : marks >= 35
//     ? "Pass"
//     : "Fail";

// console.log(result);



//=========================================

// Que. 7 

// Write a single nested ternary expression that returns one of the following based on a number:
// "Positive Even", "Positive Odd", "Negative Even", "Negative Odd", or "Zero".


// let num = -8;

// let result = num === 0
//     ? "Zero"
//     : num > 0
//     ? (num % 2 === 0 ? "Positive Even" : "Positive Odd")
//     : (num % 2 === 0 ? "Negative Even" : "Negative Odd");

// console.log(result);



//=============================================================


// Que. 8 

// Using only nested ternary operators, implement the full leap year logic
// (divisible by 4 and (not divisible by 100 or divisible by 400)) and return "Leap Year" or "Not a Leap Year".

// let year = 2024;

// let result = year % 4 === 0
//     ? (year % 100 !== 0
//         ? "Leap Year"
//         : (year % 400 === 0 ? "Leap Year" : "Not a Leap Year"))
//     : "Not a Leap Year";

// console.log(result);

//===============================================================


// Que. 9 

// Convert the following decision tree into one single nested ternary expression:

// if (role === "admin") {
//   if (action === "delete") → "Admin Delete"
//   else if (action === "edit") → "Admin Edit"
//   else → "Admin Other"
// } else if (role === "user") {
//   if (action === "view") → "User View"
//   else → "User Restricted"
// } else {
//   → "Invalid Role"
// }

// ==============> This code is not working yet <========================




//=======================================================

// Que. 10 

// Write a complex nested ternary that calculates discount and final amount based on these rules:

// Cart total ≥ 5000 → 20% discount
// Cart total ≥ 2000 → 10% discount
// Cart total ≥ 1000 → 5% discount
// Otherwise → 0% discount
// Return both the discount percentage and the final payable amount in a single expression (you may return an object or a formatted string).



// let cartTotal = 6000;

// let result = cartTotal >= 5000
//     ? { discount: "20%", finalAmount: cartTotal * 0.80 }
//     : cartTotal >= 2000
//     ? { discount: "10%", finalAmount: cartTotal * 0.90 }
//     : cartTotal >= 1000
//     ? { discount: "5%", finalAmount: cartTotal * 0.95 }
//     : { discount: "0%", finalAmount: cartTotal };

// console.log(result);





