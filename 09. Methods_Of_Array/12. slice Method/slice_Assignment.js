
//  ==============================>  Slice Method  <==============================

//  => it return a part of array , but it never changes the original array 



//  Que. 1
//  From the array [5, 10, 15, 20, 25, 30], extract elements from index 2 to 5 using slice().

// let nums = [5, 10, 15, 20, 25, 30];
// let sliceArray = nums.slice(2,6);
// console.log(sliceArray);           // [ 15, 20, 25, 30 ]
// console.log(nums);                 // [ 5, 10, 15, 20, 25, 30 ]


//  -----------------------------------------------------------------------------------------

//  Que. 2 
//  Create [10, 20, 30, 40, 50]. Use slice(1, 4) and print both the new array and the original array.

// let array = [10, 20, 30, 40, 50];
// let newArray = array.slice(1,4);
// console.log(newArray);           // [ 20, 30, 40 ]
// console.log(array);              // [ 10, 20, 30, 40, 50 ]
 

//  -----------------------------------------------------------------------------------------


//  Que. 3
//  Create an array of 6 numbers. Extract the first 3 elements using slice() and print them.

// let nums = [ 1 , 2 , 3, 4 , 5 ,6 ];
// let newArray = nums.slice(1,4);
// console.log(newArray);        // [ 2, 3, 4 ]


//  -----------------------------------------------------------------------------------------


//  Que. 4
//  Does slice() modify the original array?

//  No , it create a new of sliced elements , but original array becomes same 


//  -----------------------------------------------------------------------------------------


//  Que. 5
//  What happens if you omit the second argument in slice()?

//  => if we omit the second arguments , it will take length of array as a second argument
//  => or we can say that it will scile till end element of array 


//  ====================================>  End  <============================================