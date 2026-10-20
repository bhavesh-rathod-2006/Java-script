// Write a function expression named calculateGrade that takes a student’s percentage as input and returns the grade according to the following rules:

// ≥ 90 → "A+"
// ≥ 80 → "A"
// ≥ 70 → "B"
// ≥ 60 → "C"
// ≥ 40 → "D"
// < 40 → "F"
// Test the function with percentages: 95, 82, 67, 45, and 32.


function calculateGrade(percentage){
    if(percentage>=0 && percentage<=100){
    if(percentage>=90){
        return " Grade => A+ "
    }else if(percentage>=80){
        return " Grade => A "
    }else if(percentage>=70){
        return "Grade => B"
    }else if(percentage>=60){
        return "Grade => C"
    }else if(percentage>=40){
        return " Grade => D "
    }else{
        return "Grade => F "
    }
}else{
    return " Invalid Percentage !! "
}
}

console.log(calculateGrade(95))
console.log(calculateGrade(82))
console.log(calculateGrade(67))
console.log(calculateGrade(45))
console.log(calculateGrade(32))






