// Assignment 4: Understanding undefined vs null

let x;
let y = null;

console.log("x =", x);
console.log("y =", y);

console.log("typeof x:", typeof x);
console.log("typeof y:", typeof y);

console.log("x == y:", x == y);
console.log("x === y:", x === y);

/*
Difference Between undefined and null

1. undefined
   - A variable is undefined when it is declared but no value is assigned.
   - JavaScript automatically gives it the value undefined.

2. null
   - null means the variable has an intentionally empty value.
   - It is assigned by the programmer when there is no value to store.

Output:
typeof x -> "undefined"
typeof y -> "object"
x == y -> true
x === y -> false
*/