
// =================================>  splice() Method  <==========================

//  => we can add , or remove elements from any position by using this method
//  => it modify the original array 


//  Que. 1
//  Start with ["Jenil", "Mahir", "Arjun"]. Use splice() to insert "Krishna" between Jenil and Mahir.

// let students = ["Jenil", "Mahir", "Arjun"];
// students.splice( 1,0 , "Krishna");
// console.log(students);          // [ 'Jenil', 'Krishna', 'Mahir', 'Arjun' ]


// ---------------------------------------------------------------------------------

//  Que. 2
//  Create [10, 20, 30, 40, 50]. Remove two elements starting from index 1 and insert a new number at that position. Print the final array.

// let nums = [10, 20, 30, 40, 50];
// nums.splice(1,2,5);
// console.log(nums);                // [ 10, 5, 40, 50 ]


// ---------------------------------------------------------------------------------


//  Que. 3
//  Create [100, 200, 300]. Use splice() to replace 200 with 250 and print the array.

// let arr = [100, 200, 300] ;
// arr.splice(1,1,250);
// console.log(arr);        // [ 100, 250, 300 ]


// ---------------------------------------------------------------------------------


//  Que. 4
//  What is the main difference between slice() and splice()?

// => sclice() => it create a new array , we can create a new array that is sub-array of any main array
// => splice() => it modify the original array , we can add or remove element no matter what is the indexing value of this perticular element .


// ---------------------------------------------------------------------------------


//  Que. 5
//  Does splice() change the original array?

//  => Yes , splice method modify the the original array .


// ====================================>  End  <=====================================
