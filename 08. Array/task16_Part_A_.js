
// =====================================>    Task 16     <===========================================

// =======================> A - Mini Assignment 1: Shopping Cart Calculator <==========================


// ========>            <========
// ========>  Part - A  <========
// ========>            <========



// Tasks:

// 1.  Loop through the cart.
// 2. For each item, calculate the total price (Price × Quantity).

// 3. Print in this format
//  Product: Laptop
// Price: 45000
// Quantity: 1
// Item Total: 45000

// 4. At the end, print the Grand Total of the entire cart.
// 5. Bonus: Apply 10% discount if Grand Total > 50000 and show the final payable amount.


const cart = [
    ["Laptop", 45000, 1],
    ["Mouse", 800, 2],
    ["Keyboard", 1500, 1],
    ["Headphones", 2500, 1]
];
// (Format: [Product Name, Price, Quantity])



let GrandTotal = 0 ;
    
    for( let j = 0 ; j < cart[1].length ; j++ ){
        let product = cart[j][0];
        let price = cart[j][1];
        let quantity = cart[j][2];
        let item_total = price * quantity ;
        GrandTotal += item_total

        console.log(`Product: ${product}`);
        console.log(`Price: ${price}`);
        console.log(`Quantity: ${quantity}`);
        console.log(`Iteam Total: ${item_total}`);
        console.log("-----------------------------------------");
    };

    console.log(`Grand Total: ${GrandTotal}`)

    if(GrandTotal > 50000 ){
        console.log(`Discount: 10%`);
        console.log(`Final Price: ${GrandTotal*0.1}`);
    }else{
        console.log(`Discount: 0%`);
    };