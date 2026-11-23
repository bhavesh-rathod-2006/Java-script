
// ===========================> Task 6  <======================================

// =======================>  Looping Through Arrays  <==============================


//  Que. 1
//  What are the two types of loops demonstrated in the notes for iterating through an array?

//  => first 
//  for( let i = 0 ; i < arr.length ; i++ ){};

//  => Second
//  let students = [ "Jenil" , "Mihir" , "Yashavi" ]; 
//  for( let student of students ){}; 


// ------------------------------------------------------------------------

//  Que. 2
//  In a standard for loop, what condition is typically used to ensure the loop stops before going out of bounds? (i < ...)

//  => for( let i = 0 ; i < arr.length ; i++ )


// ------------------------------------------------------------------------

//  Que. 3
//  In the while loop example, where is the increment step (i++) placed relative to the array access statement?

//  => inside while loop ;


// ------------------------------------------------------------------------


// Que. 4
//  Write a for loop structure that prints every element of an array named students.

// let students = [ "Bhavesh" , "Dinesh" , "Bharat" , "Disha" ];
// for(let i = 0 ; i < students.length ; i++ ){
//     console.log(students[i]);
// }


// ------------------------------------------------------------------------

//  Que. 5
//  What happens if your loop condition incorrectly uses <= instead of < alongside students.length when accessing elements?

//  => first loop runs completelly  , then Undefine comes out in Output


// ------------------------------------------------------------------------

//  Que. 6
//  Write a for...of loop that prints every element of an array named subject.

// let subject = [ "Maths" , "Science" , "JavaScript" , "English" , "History" ];
// for( const ele of subject ){
//     console.log(ele);
// }



// ------------------------------------------------------------------------

// Que. 7
//  What is the main advantage of using a for...of loop over a traditional for loop when you only need the values (and not the indices)?


//  its syntax is shorter than traditional for loop
//  and this loop does not need limit 


// ------------------------------------------------------------------------

//  Que. 8
//  Given const colors = ["Red", "Blue", "Green"];, what will the following code output?

// const colors =  ["Red", "Blue", "Green"];
// for (const color of colors) {                              // Error
//     console.log(color, indexOf(color));
// }




// ==========================================================
// ======================> End <=============================
// ==========================================================


