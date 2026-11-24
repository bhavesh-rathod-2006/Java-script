
// ===============================>    Task 17   <=====================================================

// ================>  JavaScript Matrix (2D Array) Additional Practice Questions <===============================



//  Que. 1
// Given a 3 × 4 matrix, write a JavaScript program to print all elements of the 1st row in a single line with spaces.

// var matrix = [
//     [10, 20, 30, 40],
//     [50, 60, 70, 80],
//     [90, 11, 22, 33]
// ];

// let bag = "";
// for( let i = 0 ; i < matrix[0].length ; i++ ){
//     bag += matrix[0][i] + " ";
// }
// console.log(bag);



// ----------------------------------------------------------------------------


// Que. 2
//  Given a 4 × 3 matrix, write a JavaScript program to print all elements of the 2nd column in a single line with spaces.

// var matrix = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90],
//     [11, 22, 33]
// ];

// let bag = "";
// for( let j = 0 ; j < matrix.length ; j++ ){
//     bag += matrix[j][1] + " ";
// };
// console.log(bag);



// ----------------------------------------------------------------------------

//  Que. 3
// Given a 4 × 4 matrix, write a JavaScript program to print all elements of the primary diagonal (top-left to bottom-right).

// var matrix = [
//     [10, 20, 30, 40],
//     [50, 60, 70, 80],
//     [90, 11, 22, 33],
//     [44, 55, 66, 77]
// ];
// let bag = "";
// for ( let i = 0 ; i < matrix.length ; i++ ){
//     for(let j = 0 ; j < matrix[i].length ; j++ ){
//         if(i == j){
//             bag += matrix[i][j] + " ";
//         }
//     }
// }
// console.log(bag);




// ----------------------------------------------------------------------------


//  Que. 4
// Given a 4 × 4 matrix, write a JavaScript program to print all elements of the secondary diagonal (top-right to bottom-left).


// var matrix = [
//     [10, 20, 30, 40],
//     [50, 60, 70, 80],
//     [90, 11, 22, 33],
//     [44, 55, 66, 77]
// ];

// let bag = "";
// for ( let i = 0 ; i < matrix.length ; i++ ){
//     for(let  j = 0 ; j < matrix[i].length ; j++ ){
//         if(i + j == matrix.length - 1){
//             bag += matrix[i][j] + " ";
//         }
//     }
// }
// console.log(bag);




// -----------------------------------------------------------------------------------


//  Que. 5
//  Given a 3 × 4 matrix, write a JavaScript program to print all elements of the last row in a single line with spaces.


// var matrix = [
//     [10, 20, 30, 40],
//     [50, 60, 70, 80],
//     [90, 11, 22, 33]
// ];

// let bag = "";

// for( let i = 0 ; i < matrix[2].length ; i++ ){
//     bag += matrix[2][i] + " ";
// };
// console.log(bag);




// -----------------------------------------------------------------------------------


//  Que. 6
//  Given a 4 × 3 matrix, write a JavaScript program to print all elements of the first column in a single line with spaces.


// var matrix = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90],
//     [11, 22, 33]
// ];

// let bag = "";
// for( let i = 0 ; i < matrix.length ; i++ ){
//     bag += matrix[i][0] + " ";
// };
// console.log(bag);





// -----------------------------------------------------------------------------------


//  Que. 7
//  Given a 3 × 3 matrix, write a JavaScript program to print all the boundary elements in clockwise order, starting from the top-left corner.


var matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

