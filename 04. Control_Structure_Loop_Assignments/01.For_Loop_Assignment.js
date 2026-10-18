//Que. 1

// Given an array of temperatures [28, 32, 25, 40, 18, 35], use a for loop to count how many days were hotter than 30°C.


// let temp = [28, 32 , 25 , 40 , 18 , 35 ,5 , 67 , 8 ,45 , 6 , 12 ];

// let count = 0 ;

// for(i=0 ; i<=temp.length -1 ; i++){
//     if(temp[i]>30){
//        count += 1
//     }
    
// }
// console.log(`${count} tempratures are greater than 30 `)



//----------------------------------------------------------------


// que 2 
//Write a for loop that calculates the sum of all digits of a given number (example: 4729 → 4+7+2+9 = 22).



// let sum =0 ;

// for(let num = 4729 ; num>0 ;num = Math.floor(num/10)){
//     let lastDIgit = num % 10 ;
   
//     sum += lastDIgit ;
    
// }
// console.log(sum)












//------------------------------------------


// que. 3

//Create a for loop that prints only the numbers between 1 and 100 that are divisible by both 3 and 5, but not by 7.

// for(i=1 ; i<=100 ; i++){
//     if(i%3==0 && i%5 == 0 && i%7 != 0){
//         console.log(i)
//     }
// }



//----------------------------------------------


// que 4 
// Given the string "JavaScript", use a for loop to create a new string that contains only the consonants (remove vowels).


// let str = "javascript";
// let bag = ""
// for(i=0 ; i<str.length ; i++){
//     if(str[i]!="a" && str[i]!="e" && str[i]!="i" && str[i]!="o" && str[i]!="u"  ){
//      bag += str[i]
//     }
// }

// console.log(bag)



//---------------------------------------------


// que. 5

// Write a for loop that finds the second-largest number in an array of positive integers without using any sorting method.

let fib = [0,1];

let a = fib[0];
let b= fib[1];

for(let i=2 ; i<=14; i++){
    let c = a + b ;
    a=b ;
    b=c ;
    fib[i]=c;
}
// console.log(fib)

let bag = "";
for(let i = fib.length -1 ; i>=0 ; i--){
      bag += fib[i] + " ";
}
console.log(bag)





//----------------------------------------------


// que. 6

// 




