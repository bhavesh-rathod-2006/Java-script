// SWITCH CASE STATEMENTS ASSIGNMENTS 



// que. 1

// Write a program that takes a month number (1–12) and prints the number of days in that month using switch
// (Hint: Consider 28/29 for February as 28 for simplicity).

// let month = 10 ;

// switch (month){
//     case 1 :
//     case 3 :
//     case 5 :
//     case 7 :
//     case 8 :
//     case 10 :
//     case 12 :
//         console.log( ` month ${month} has 31 days `)
//         break ;

//     case 4 :
//     case 9 :
//     case 11 :
//         console.log(` month ${month} has 30 days `)
//         break; 
//     case 2 :
//         console.log(` month ${month} has 28 days `)
//         break;       
//     default :
//     console.log("Enter a vaild number ")

// }





// que 2 . 

// Write a program that checks a character and prints whether it is a vowel or consonant using switch.

// let character = "B"

// switch( character.toLocaleLowerCase()){
//     case "a":
//     case "e" :
//     case "i" :
//     case "o" :
//     case "u" :

//     console.log(`${character} is vowel `)
//      break;
//     default :
//     console.log(`${character} is a consonant `)
// } 



//================================================================


// que. 3

//Create a program that takes a number from 1 to 4 and prints the season using multiple cases together:
// 1 or 2 → Winter
// 3 or 4 → Summer

// let month = 2 ;

// switch(month){
//     case 1 :
//     case 2 :
//         console.log("Winter ")
//         break ;
        
//     case 3 :
//     case 4 : 
//             console.log("Summer")
//             break;
//     default :
//            console.log(" Please enter 1, 2 , 3 or 4 ")   
// }



// ==============================================================


// que. 4 

// Write a program using switch (true) to assign class based on marks:
// ≥ 75 → Distinction
// ≥ 60 → 1st class
// ≥ 50 → 2nd class
// ≥ 35 → 3rd class
// below 35 → Failed


// let marks = 79 ;

// switch(true){
//     case marks>= 75 :
//         console.log("Distriction")
//         break;
//     case marks>=60 :
//         console.log("1st Class")
//         break ;
//     case marks>=50 :
//         console.log("2nd Class ")   
//         break;
//     case marks>=35 :
//         console.log("3rd Class")
//         break;
//     case marks< 35 :
//         console.log("Failed !!")
             
// }


// ==================================================================

// que. 5 

// Create a nested switch program:
// First take a role (“admin” or “user”).
// If role is “admin”, then take an action (“create”, “edit”, “delete”) and print the corresponding message.
// If role is “user”, print “Limited Access”.


// let role = "admin";
// let action = "edit";

// switch (role) {
//     case "admin":
//         switch (action) {
//             case "create":
//                 console.log("Admin can create.");
//                 break;

//             case "edit":
//                 console.log("Admin can edit.");
//                 break;

//             case "delete":
//                 console.log("Admin can delete.");
//                 break;

//             default:
//                 console.log("Invalid action.");
//         }
//         break;

//     case "user":
//         console.log("Limited Access");
//         break;

//     default:
//         console.log("Invalid role.");
// }





//=====================================================================

// Predict the output


// let fruit = "mango";

// switch (fruit) {
//   case "apple":
//     console.log("Apple is red");
//   case "mango":
//     console.log("Mango is yellow");
//   case "banana":
//     console.log("Banana is yellow");
//   default:
//     console.log("Unknown fruit");
// }


// the output is ==>
// Mango is yellow
// Banana is yellow
// Unknown fruit



//===============================================================


// que. 7

// let value = "0";

// switch (value) {
//     case 0:
//         console.log("The value is number 0");
//         break;

//     case "0":
//         console.log('The value is string "0"');
//         break;

//     case false:
//         console.log("The value is false");
//         break;

//     case null:
//         console.log("The value is null");
//         break;

//     case undefined:
//         console.log("The value is undefined");
//         break;

//     default:
//         console.log("Unknown value");
// }



//================================================================

// que. 8 

// Create a tricky calculator using switch that supports these operations:
// +, -, *, /, %, and also ** (exponentiation).
// Handle division by zero properly inside the corresponding case.


// let num1 = 10;
// let num2 = 3;
// let operator = "**";

// switch (operator) {
//     case "+":
//         console.log(num1 + num2);
//         break;

//     case "-":
//         console.log(num1 - num2);
//         break;

//     case "*":
//         console.log(num1 * num2);
//         break;

//     case "/":
//         if (num2 === 0) {
//             console.log("Cannot divide by zero");
//         } else {
//             console.log(num1 / num2);
//         }
//         break;

//     case "%":
//         if (num2 === 0) {
//             console.log("Cannot find remainder with zero");
//         } else {
//             console.log(num1 % num2);
//         }
//         break;

//     case "**":
//         console.log(num1 ** num2);
//         break;

//     default:
//         console.log("Invalid operator");
// }




// ============================================================

// que. 9 

// Write a program using switch that takes a date (day number of the month) and prints:
// “Beginning of the month” (1–10)
// “Middle of the month” (11–20)
// “End of the month” (21–31)
// Use switch (true) technique for range checking.



// let day = 15;

// switch (true) {
//     case day >= 1 && day <= 10:
//         console.log("Beginning of the month");
//         break;

//     case day >= 11 && day <= 20:
//         console.log("Middle of the month");
//         break;

//     case day >= 21 && day <= 31:
//         console.log("End of the month");
//         break;

//     default:
//         console.log("Enter a valid day number");
// }




//================================================================

// que. 10

// Create a multi-level nested switch program for an online food ordering system:
// First select Category: "veg" or "nonveg".
// Then select Item based on category.
// Finally select Size: "half" or "full" and print the final order summary with price.



// let category = "veg";
// let item = "paneer";
// let size = "full";

// let price = 0;

// switch (category) {
//     case "veg":

//         switch (item) {
//             case "paneer":

//                 switch (size) {
//                     case "half":
//                         price = 120;
//                         break;

//                     case "full":
//                         price = 220;
//                         break;

//                     default:
//                         console.log("Invalid size");
//                 }
//                 break;

//             case "pizza":

//                 switch (size) {
//                     case "half":
//                         price = 150;
//                         break;

//                     case "full":
//                         price = 280;
//                         break;

//                     default:
//                         console.log("Invalid size");
//                 }
//                 break;

//             default:
//                 console.log("Invalid veg item");
//         }
//         break;

//     case "nonveg":

//         switch (item) {
//             case "chicken":

//                 switch (size) {
//                     case "half":
//                         price = 180;
//                         break;

//                     case "full":
//                         price = 320;
//                         break;

//                     default:
//                         console.log("Invalid size");
//                 }
//                 break;

//             case "biryani":

//                 switch (size) {
//                     case "half":
//                         price = 150;
//                         break;

//                     case "full":
//                         price = 280;
//                         break;

//                     default:
//                         console.log("Invalid size");
//                 }
//                 break;

//             default:
//                 console.log("Invalid nonveg item");
//         }
//         break;

//     default:
//         console.log("Invalid category");
// }

// if (price > 0) {
//     console.log("----- Order Summary -----");
//     console.log(`Category: ${category}`);
//     console.log(`Item: ${item}`);
//     console.log(`Size: ${size}`);
//     console.log(`Price: ₹${price}`);
// }






















































