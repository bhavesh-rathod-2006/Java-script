// Write a function declaration named analyzeStudent that takes four parameters: name, m1, m2, and m3.
// Inside the function:

// Calculate the total marks
// Calculate the average
// Return a readable string in this format:
// "[name] scored total [total] with average [average]"

// Call the function with at least two different students and display the results.


function analyzeStudent(name , m1 , m2 , m3){
    let total = m1 + m2 + m3 ;
    let average = (total/3).toFixed(2);
    return `${name} scored total ${total} with average ${average}` 
}


console.log(analyzeStudent("Bhavesh" , 99 , 91 , 95 ))

console.log(analyzeStudent("Shivam" , 33 , 19 , 12 ))



