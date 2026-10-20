// a) Explain the difference between local scope and global scope with respect to functions.
// b) Write a program that demonstrates the following:

// A function displayAge that declares a local variable age = 20 and prints it.
// Try printing age outside the function and observe/explain the error.
// Declare a global variable course = "JavaScript" and write a function that prints the value of course.



function displayAge(){
    let age = 20 ;
    console.log(age);
}

// console.log(age)   // ReferenceError: age is not defined

let course = "Javascript";

function difineCourse(){
    console.log(course);  //Javascript
}



difineCourse() 
console.log(course)   // Javascript