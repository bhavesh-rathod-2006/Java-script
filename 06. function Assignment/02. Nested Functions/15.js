// Create the following functions (you may use either declarations or expressions):

// sumOfThree(a, b, c) → returns the sum of three numbers
// averageOfTwo(x, y) → returns the average of two numbers
// maxOfTwo(a, b) → returns the larger of two numbers
// fullName(first, last) → returns the full name
// Test each function with suitable values and print the results.


function studentDetails(firstName , lastName , m1 , m2 , m3 ){
    function sumOfThree(){
        let total =  m1 + m2 + m3 ;
        return total; 

    }
    function averageOfTwo(){
        let avg = ((m1 + m2 )/2).toFixed(2);
        return avg;
    }
    function maxOfTwo(){
        if(m1>m2){
            return m1;
        }else if( m2 > m1){
            return m2 ;
        }else{
            return `m1 = m2 = ${m1}`
        }

    }
    function fullName(){
        return firstName + "  " + lastName ;
    } 
    return ` Sum of ${m1} , ${m2} and ${m3} => ${sumOfThree()} , avarage of ${m1} and ${m2} => ${averageOfTwo()} , Max of ${m1} and ${m2} is => ${maxOfTwo()}  and  Full name of student is => ${fullName()}`
}

console.log(studentDetails("Bhavesh" , "Rathod" , 99 , 87 , 91 ))