// // que 1


// let temperatures = [28, 32, 25, 40, 18, 35];
// let count = 0;

// for (let i = 0; i < temperatures.length; i++) {
//     if (temperatures[i] > 30) {
//         count++;
//     }
// }

// console.log("Days hotter than 30°C:", count);








// // que 2


// let num = 4729;
// let sum = 0;

// for (; num > 0; num = Math.floor(num / 10)) {
//     sum += num % 10;
// }

// console.log("Sum of digits:", sum);






// que 3

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
//         console.log(i);
//     }
// }






// que 4

// let str = "JavaScript";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i].toLowerCase();

//     if (
//         ch !== "a" &&
//         ch !== "e" &&
//         ch !== "i" &&
//         ch !== "o" &&
//         ch !== "u"
//     ) {
//         result += str[i];
//     }
// }

// console.log("Consonants:", result);








// que 5

// let arr = [10, 25, 8, 40, 30];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] < largest) {
//         secondLargest = arr[i];
//     }
// }

// if (secondLargest === -Infinity) {
//     console.log("No second-largest distinct number");
// } else {
//     console.log("Second-largest:", secondLargest);
// }







// que 6 

// let num = 28;
// let sum = 0;

// for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//         sum += i;
//     }
// }

// if (sum === num && num > 0) {
//     console.log(num, "is a perfect number");
// } else {
//     console.log(num, "is not a perfect number");
// }












// que 7

// let num = 1;

// for (let i = 1; i <= 8; i++) {
//     console.log(num);
//     num = num * 2;
// }











// que 8

// let a = 0;
// let b = 1;

// for (let i = 1; i <= 20; i++) {
//     console.log(a);

//     let next = a + b;
//     a = b;
//     b = next;
// }











// que 9

// let scores = [45, 78, 90, 32, 56, 88];
// let sum = 0;

// for (let i = 0; i < scores.length; i++) {
//     sum += scores[i];
// }

// let average = sum / scores.length;
// let count = 0;

// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > average) {
//         count++;
//     }
// }

// console.log("Average score:", average);
// console.log("Students above average:", count);








// que 10

// let num = 25;
// let binary = "";

// if (num === 0) {
//     binary = "0";
// } else {
//     for (; num > 0; num = Math.floor(num / 2)) {
//         let remainder = num % 2;
//         binary = remainder + binary;
//     }
// }

// console.log("Binary representation:", binary);



