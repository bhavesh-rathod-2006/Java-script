// # Write a function expression named calculateSimpleInterest that takes three parameters: principal, rate and time.
// # The function should calculate and return simple interest using the formula:
// # SI = (principal × rate × time) / 100
// # Call the function with principal = 10000, rate = 5 and time = 2 and print the result.


function calculateSimpleInterest(principal , rate , time){
    return (principal*rate*time)/100

}

console.log(calculateSimpleInterest(1000,5,2))   //60

