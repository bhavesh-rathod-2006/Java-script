// a) State one major difference between a function declaration and a function expression.
// b) Write a function (either declaration or expression) that takes a student’s name and marks as parameters and returns a message in this format:
// "Student [name] has scored [marks] marks."
// Call the function with any two different students.


//------------------------------
// Function declaration =>

    function myFunc(){

    }
// Function Expretion =>

    let result = myFunc()
//------------------------------

function studentInformation(name , marks){
    return `Student ${name} has scored ${marks} marks `
}


console.log(studentInformation("Bhavesh" , 99 ))


