// NESTED IF CONDITIONAL STATEMENT ASSIGNMENT


// que. 1
//if a number is greater than 10.
//If yes, then check whether it is divisible by 3 and print the appropriate message.

// let num = 18 ;

// if(num>10){
//     if(num%3==0){
//         console.log(`${num} is greater than 10 and divisible by 3 `)
//     }else{
//         console.log(`${num} is greater than 10 but not divisible by 3 `)
//     }
// }else{
//     console.log("The number should be greater than 10")
// }







// que. 2
// Write a program that first checks if a person is 18 or older.
//If yes, then check if they have a voter ID. Print “Can Vote” only if both conditions are true.
 
// let age= 41 ;
// let haveVoterId = "yes" ;

// if(age>18 && age<121){
//     if(haveVoterId=="yes"){
//           console.log("Able to vote ")
//     }else{
//         console.log("Not able to vote ")
//     }
    
// }else if(age<18 && age>0) {
//     console.log("You are minor , not able to vote ")

// }else{
//     console.log("Enter valid details !!")
// }







// que. 3
// Check if a student has scored 40 or more marks.
//If yes, then check if the score is 80 or above and print “Passed with Distinction”.


// let marks = 93 ;

// if(marks>=40 && marks<=100 ){
//      if(marks>=80){
//         console.log(" Passed & Distinction ")
//      }else{
//         console.log("Pass !!")
//      }
// }else if(marks<40 && marks>=0){
//     console.log("Fail !!")
// }else{
//     console.log("Enter a valid score !!")
// }





// que. 4
// Create a simple ATM system:
//First check if the PIN is correct.
//If PIN is correct, then check if the account balance is sufficient for withdrawal.


// let pin = "1234" ;

// let balance = 3000 ;

// if(pin=="1234"){
//     if(balance>=2500){
//         console.log("Pin is correct , sufficient amount , you should withrawal")
//     }else{
//         console.log("Pin is correct , but you have not a sufficient ammount to withdrawal")
//     }
// }else{
//     console.log("Incorrect pin , try again !!")
// }






// Write a program that checks if a year is divisible by 4.
//If yes, then further check if it is divisible by 100.
//If it is divisible by 100, then check if it is also divisible by 400 to confirm it is a leap year

// let year = 2024 ;

// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             console.log(`${year} is a leap year `)
//         } else{
//              console.log(`${year} is not a leap year`)
//         }
//     } else{
//          console.log(`${year} is not a leap year`)
//     }
// }else{
//     console.log(`${year} is not a leap year`)
// }



// =======> This code is not working properly <=========









// que. 6
// Check if a user has entered a valid email (contains “@”).
//If yes, then check if the email ends with “.com”.
//If both are true, then check if the length of the email is greater than 10 characters and print “Valid Email”.














//=================================================================



// que. 7 

// Write a program for online shopping:
// First check if the cart total is ₹1000 or more.
// If yes, then check if the user is a premium member.
// If the user is premium, give 20% discount, otherwise give 10% discount.
// Finally print the final amount after discount



// let cartTotal = 1500;
// let isPremiumMember = true;

// let finalAmount;

// if (cartTotal >= 1000) {
//     if (isPremiumMember) {
//         finalAmount = cartTotal - (cartTotal * 20 / 100);
//     } else {
//         finalAmount = cartTotal - (cartTotal * 10 / 100);
//     }
// } else {
//     finalAmount = cartTotal;
// }

// console.log("Cart Total: ₹" + cartTotal);
// console.log("Final Amount: ₹" + finalAmount);







// que. 8 

// Check if a number is positive.
// If yes, then check whether it is even.
// If it is even, then further check if it is divisible by 4 and print “Positive Even and Divisible by 4”.


// let num = 24 ;

// if(num>0){
//     if(num%2==0){
//         if(num%4==0){
//             console.log(`${num} is possitvie , even & divisiable by 4 `)

//         }else{
//              console.log(`${num} is possitvie , even but not divisiable by 4 `)
//         }

//     }else{
//          console.log(`${num} is possitvie and odd number `)
//     }

// }else if(num==0){
//         console.log(`${num} is zero number `)
    
// }else{
//      console.log(`${num} is a negitive number `)
// }






//=============================================================




// que. 9 

// Create a job eligibility checker with multiple conditions:
// First check if age is between 21 and 30.
// If age is valid, then check if the candidate has a graduation degree.
// If the degree is present, then check if the candidate has at least 2 years of experience.
// Print “Eligible for Interview” only if all three conditions are true.


// let age = 27;
// let graduationDegree = true ;
// let experience = 3 ;
// if(age>=21 && age<=30){
//     if(graduationDegree){
//         if(experience>=2){
//             console.log("Eligible for interview ")
//         }else{
//             console.log("Not Eligible for interview ")
//         }

//     }else{
//          console.log("Not Eligible for interview ")
//     }

// }else{
//      console.log("Not Eligible for interview ")
// }




//=====================================================================


// que. 10 

// Write a nested program for exam eligibility:
// First check if the student is present.
// If present, then check if internal marks are ≥ 30.
// If internal marks are valid, then check if external marks are ≥ 35.
// Print “Eligible for Final Exam” only when all conditions are satisfied.

// let isStudentPresent = true ;
// let internalMArks = 45 ;
// let externalMArks = 72 ;

// if(isStudentPresent){
//     if(internalMArks>=30){
//         if(externalMArks>=35){
//             console.log("Eligible for Final Exam ")
//         }else{
//             console.log("Not Eligible for Final Exam ")
//         }
//     }else{
//         console.log("Not Eligible for Final Exam ")
//     }
// }else{
//     console.log("Not Eligible for Final Exam ")
// }



























































































































