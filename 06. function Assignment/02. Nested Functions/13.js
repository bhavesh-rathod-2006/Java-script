// a) What is a nested function?
// b) Write a function studentReport that takes a student’s name and three subject marks.
// Inside it, create an inner function total that calculates the sum of the three marks.
// The outer function should return a string like:
// "[name] total marks: [total]"

// Call studentReport with one set of values and print the result.


function studentReport(name , m1 , m2 , m3 ){
    function total(){
        let sum = m1 + m2 + m3 ;
        return sum
    }

    let result = total()
    return `Name: ${name}  total marks: ${result} `
}


console.log (studentReport("Bhavesh" , 99 , 91 , 89 ))









