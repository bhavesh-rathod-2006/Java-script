// Assignment 2: Changing and Not Changing Values

// let variable can be changed
let score = 0;

console.log("Initial Score:", score);

score += 10;
console.log("After adding 10:", score);

score += 5;
console.log("After adding 5:", score);

score -= 3;
console.log("After subtracting 3:", score);

// const variable cannot be changed
const maxScore = 100;

console.log("Maximum Score:", maxScore);

// Uncomment the line below to see the error
// maxScore = 120;

// Error:
// TypeError: Assignment to constant variable.