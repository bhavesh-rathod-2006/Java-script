// Write a complete program that does the following:

// Create a function processStudent(name, m1, m2, m3) that:

// Calculates total and average using an inner function
// Determines Pass/Fail
// Returns a complete report string
// Call this function for three different students and print their reports.

// Additionally, create a separate function compareAverages(avg1, avg2) that returns which average is higher (or if they are equal).


function processStudent(name , m1 , m2 , m3 ){
    function total(){
        return m1+m2+m3 ;
    }
    function avarage(){
        return ((m1 + m2 + m3 )/3).toFixed(2);
    }
    function result(){
        if(((m1+m2+m3)/3)>=40){
            return " Pass !! "
        }else{
            return "Fail !!"
        }
    }
    return ` ${name} has scored total ${total()} marks , and average is => ${avarage()} , and ${result()} `

}


console.log(processStudent("Bhavesh ", 99 , 87 , 91 ))



