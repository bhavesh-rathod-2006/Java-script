// Write a function named generateReport that takes four parameters: name, m1, m2, m3.
// The function should calculate and return a well-formatted report containing:

// Student name
// Total marks
// Average
// Result ("Pass" if average ≥ 40, otherwise "Fail")
// Call the function with two different students and display both reports.


function generateReport(name , m1 , m2 , m3 ){
    function studentName(){
        return name;
    }
    function totalMarks(){
        let total = m1 + m2 + m3 ;
        return total;
    }
    function Average(){
        let total = m1 + m2 + m3 ;
        let avg = (total/3).toFixed(2);
        return avg ;
    }
    function result(){
        let avg = ((m1 + m2 + m3)/3).toFixed(2); 
        if(avg>=40){
            return "Pass"
        }else{
            return "Fail"
        }
    }

    return ` ${studentName()} has scored ${totalMarks()} and average is ${Average()} , and ${result()} `
}

console.log(generateReport("Bhavesh" , 99 , 72 , 87 ));