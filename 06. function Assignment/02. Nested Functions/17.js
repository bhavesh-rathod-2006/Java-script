// Write a function declaration named calculateFinalPrice that takes two parameters: price and discountPercent.
// The function should return the final price after applying the discount.
// Formula: finalPrice = price - (price × discountPercent / 100)

// Call the function with:

// price = 2500, discount = 15
// price = 1200, discount = 10


function calculateFinalPrice(price , discountPercent){
    let finalPrice = price - ((price*discountPercent)/100);

    return `Actual Price => ${price} , discount % => ${discountPercent}% , Final price is => ${finalPrice}`

}

console.log(calculateFinalPrice(2500 , 15 ));
console.log(calculateFinalPrice(1200 , 10 ));











