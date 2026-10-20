// # Write two function expressions:

// # celsiusToFahrenheit(c) → converts Celsius to Fahrenheit
// # Formula: (c × 9/5) + 32
// # fahrenheitToCelsius(f) → converts Fahrenheit to Celsius
// # Formula: (f - 32) × 5/9
// # Test both functions with at least two values each.




function celsiusToFahrenheit(c){
    let Fahrenheit = (c*(9/5).toFixed(2))+32 ;
    return ` ${c}cel to  Fahrenheit => ${Fahrenheit} `
}
function fahrenheitToCelsius(f){
    let Celius = (f-32)*(5/9).toFixed(2) ;
    return ` ${f}fah to Celsius => ${Celius}`
}

console.log(celsiusToFahrenheit(-10));

console.log(fahrenheitToCelsius(40));





















