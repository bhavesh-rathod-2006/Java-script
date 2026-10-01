// if ... else if .... else  CONDITIONAL STATEMENTS ASSIGNMENTS 


// que. 1
// Write a program that takes a month number (1–12) and prints the corresponding season:
// Winter (12, 1, 2), Summer (3, 4, 5), Monsoon (6, 7, 8), Autumn (9, 10, 11).

// let month = 6 ; // ( 1- 12)

// if(month==12 || month==1 || month==2 ){
//     console.log(" Winter")
// }else if (month>=3 && month<=5){
//     console.log(" Summer ")
// } else if (month>=6 && month<=8){
//     console.log(" Monsoon ")
// }else{
//     console.log(" Autumn ")
// } 






// que. 2
// Create a simple tax calculator based on income:
// Income < 3,00,000 → No tax
// 3,00,000 – 7,00,000 → 5% tax
// 7,00,000 – 10,00,000 → 10% tax
// Above 10,00,000 → 15% tax
// Print the tax amount.


// let income = 600000 ;

// if(income<300000){
//     console.log(" No tax ")
// }else if(income>=300000 && income<700000) {
//     console.log(" 5% tax")
// }else if(income>=700000 && income<1000000){
//    console.log(" 10% tax")
// }else{
//     console.log(" 15% Tax ")
// }






// que. 3
// Write a program that checks a student’s score and prints:
// “Outstanding” (90 and above), “Good” (70–89), “Average” (40–69), “Needs Improvement” (below 40).

// let score = 91 ;

// if(score>=90 && score<=100){
//     console.log("Outstanding")
// }else if(score>=70 && score<=89) {
//     console.log("Good")
// }else if(score>=40 && score<=69){
//     console.log("Average ")
// }else if (score>=0 && score<=39){
//     console.log("Needs Improvement")
// }else{
//     console.log("Invalid score !!")
// }






// que. 4
// Check the speed of a vehicle and print:
//“Slow” (below 40), “Normal” (40–80), “Fast” (above 80).


// let speed = 30 ;

// if(speed>=0 && speed<40){
//     console.log("Slow speed")
// } else if(speed>=40 && speed<=80){
//     console.log("Normal")
// }else {
//     console.log("Fast")
// }





// que. 5
// Write a program that checks a person’s height (in cm) and prints:
//“Short” (< 150), “Average” (150–170), “Tall” (> 170).


// let height = 172 ;
// if (height <150){
//     console.log("Short")
// }else if(height>=150 && height<170 ){
//     console.log("Average")
// }else{
//     console.log("Tall")
// }






//que. 6
// Check the day number (1–7) and print whether it is a Weekday or Weekend
//(1 to 5 = Weekday, 6 and 7 = Weekend).


// let day = 5;

// if(day>=1 && day<=5){
//     console.log("Weekday")
// }else if(day== 6 || day == 7 ){
//     console.log("Weekend")
// }else{
//     console.log("Enter a valid day ")
// }






// que. 7
// Write a program that calculates electricity bill based on units:
//0–50 units → ₹2 per unit
// 51–150 units → ₹4 per unit
// Above 150 units → ₹6 per unit
// Print the total bill.


// let unit = 200 ;

// if(unit>=0 && unit<=50){
//     console.log(`electricity bill ==> ${unit*2}`)

// }else if(unit>=51 && unit<=150) {
//     console.log(`Electricity bill ==> ${(unit-50)*4 + 100}`)
// }else if(unit>150){
//     console.log(`Electriity bill ==> ${(unit-150)*6 + 500 }`)
// }









// que. 8
// Create a program that checks a student’s attendance percentage and prints:
//“Excellent” (≥ 90), “Good” (75–89), “Satisfactory” (50–74), “Poor” (< 50).

// let attendance = 99 ;

// if(attendance>=90 && attendance<=100){
//     console.log("Excellent !!")
// }else if (attendance>=75 && attendance<=89){
//     console.log("Good !!")
// }else if (attendance<=74 && attendance>=50 ){
//     console.log("Satisfactory !!")
// }else if ( attendance<50 && attendance>=0){
//     console.log("Poor !!")
// }else{
//     console.log("Invalid input !!")
// }







// que. 9 
// Write a program that takes three subject marks and finds the highest mark among them using if...else if...else.

// let marks1 = 97 ;
// let marks2 =91;
// let marks3 = 89 ;

// if(marks1>marks2 && marks1>marks3){
//     console.log(`${marks1} is the largest marks `)
// }else if(marks2>marks1 && marks2>marks3 ) {
//     console.log(`${marks2} is the largest marks `)
// }else if(marks3>marks2 && marks3>marks1){
// console.log(`${marks3} is the largest marks`)
// }else if(marks1==marks2 && marks2==marks3 ) {
//     console.log("All the marks are same ")
// }else{
//     console.log("Any two numbers are same ")
// }











// que. 10
// Check a number and print one of the following:
//“Positive Even”, “Positive Odd”, “Negative Even”, “Negative Odd”, or “Zero”.

// let num= 27 ;
// if(num==0){
//   console.log("Zero")
// }else if(num%2 == 0){
//     if(num>0){
//         console.log("Positive even ")
//     }else{
//         console.log("Negitive even ")
//     }
// }else{
//     if(num>0){
//         console.log("Possitive odd")
//     }else{
//         console.log("Negitive odd")
//     }
// }














