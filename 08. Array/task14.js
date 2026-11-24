
// ===========================> Task 14  <======================================

// =======================>  Practice Exercises <===============================

// Que. 1
// Given the array:
// const numbers = [12, 7, 18, 25, 4, 9, 30];
// Print only the even numbers using a loop.


// const numbers = [12, 7, 18, 25, 4, 9, 30];

// for(i=0 ; i < numbers.length ; i++ ){
//     if(numbers[i]%2 == 0){
//         console.log(numbers[i]);
//     }
// }



// ---------------------------------------------------------------

//  Que. 2
// Given the array:
// const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];
// Print all city names in reverse order (last to first) using a loop.



// const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];

// for( let i = cities.length -1 ; i >= 0 ; i--  ){
//     console.log(cities[i])

// }



// ---------------------------------------------------------------

//  Que. 3
//  Given the array:
// const scores = [12, 45, 7, 89, 23];
// Find and print the second largest number.



// const scores = [12, 45, 7, 89, 23];

// let largestNumber = scores[0];

// for( let i = 0 ; i < scores.length ; i++ ){
//     if( largestNumber < scores[i]){
//         largestNumber = scores[i];
//     };
// };
// console.log(largestNumber)



// ---------------------------------------------------------------


//  Que. 4
//  Given the array:
// const colors = ["Red", "Blue", "Green", "Yellow"];
// Use push() to add "Purple" at the end and unshift() to add "Black" at the beginning. Then print the final array.



// const colors = ["Red", "Blue", "Green", "Yellow"];
// colors.push("Purple");
// colors.unshift("Black");
// console.log(colors);



// ---------------------------------------------------------------

// Que. 5
//  Given the Matrix

// const matrix = [
//     [10, 20, 30],
//     [40, 50, 60]
// ];

// Calculate and print the sum of all elements.


// let sum = 0 ;

// for( let i = 0 ; i < matrix.length ; i++ ){
//     for( let j = 0 ; j < matrix[i].length ; j++ ){
//         sum += matrix[i][j];

//     }
// }

// console.log(sum);     // 210



// ---------------------------------------------------------------


//  Que. 6
//  Given the array:
// const marks = [45, 67, 89, 32, 76, 91, 54];
// Count how many numbers are greater than 50 and print the count.


// const marks = [45, 67, 89, 32, 76, 91, 54];

// let count = 0 ;

// for( let i = 0 ; i < marks.length ; i++ ){
//     if(marks[i] > 50 ){
//         count += 1;
//     };
// };
// console.log(count);      // 5




// ---------------------------------------------------------------

// Que. 7 
//  Given the Matrix
// Print only the main diagonal elements (1, 5, 9).


// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for( let i = 0 ; i < matrix.length ; i++ ){
//     for( let j = 0 ; j < matrix.length ; j++ ){
//         if( i == j ){
//             console.log(matrix[i][j]);
//         };
//     };
// };




// ==========================================================
// ======================> End <=============================
// ==========================================================
