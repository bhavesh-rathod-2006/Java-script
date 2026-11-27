
// ========================>  sort() Method  <==================================

//  => sort() Metod sort the array



//  Que. 1
//  Sort an array of 5 student names alphabetically and print the result.

// let names = [ "Akash" , "Abhijit" , "Ashok" , "Aryan" , "Amit" , "Abhay" ];
// names.sort()
// console.log(names)    // [ 'Abhay', 'Abhijit', 'Akash', 'Amit', 'Aryan', 'Ashok' ]



// ---------------------------------------------------------------------------------------------


//  Que. 2
//  Create an array ["Dog", "Cat", "Elephant", "Ant"] and sort it. Print the sorted array.


// let animal =  ["Dog", "Cat", "Elephant", "Ant"];
// animal.sort()
// console.log(animal);       // [ 'Ant', 'Cat', 'Dog', 'Elephant' ]



// ---------------------------------------------------------------------------------------------


// //  Que. 3
// //  Create the array [40, 100, 5, 25] and sort it. Print the result.

// let nums =  [40, 100, 5, 25];
// nums.sort();
// console.log(nums);                        // [ 100, 25, 40, 5 ]



// ---------------------------------------------------------------------------------------------


//  que. 4
//  Why does sort() give an incorrect order for the numbers [40, 100, 5, 25]?

// => becase its arrange elements based on sky value 
//  => its check one- by -one character , if firsts characters are same then it will compare next one
//  => until it find different sky values 


// ---------------------------------------------------------------------------------------------


//  Que. 5
//  Does sort() change the original array?

//  yes , short() method modify the original array .




// ==============================>   Important Que.   <===========================================


// let nums = [10 , 2 , 39 , 101 , 4008 , 56 ];
// // nums.sort(function(a,b){return a- b}); // accending
// nums.sort(function(a,b){return b- a});      // decending

// // nums.sort((a,b)=> a>b ? 1: -1);   // accending
// nums.sort((a,b)=> b>a  ? 1 : -1 );   // decending
 
// console.log(nums)


// ----------------------------------->   End   <-------------------------------------------------
