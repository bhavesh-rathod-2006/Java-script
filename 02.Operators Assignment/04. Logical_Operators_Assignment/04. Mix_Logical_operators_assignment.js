//  MIXED LOGICAL OPERATORS ASSIGNMENT 


// que. 1
// A user can enter if they are a member (isMember = true) and not banned (isBanned = false). Check using && and !.

// let isMember = true ;
// let isBanned = false ;

// let isEnter = isMember && isBanned ;
// console.log(isEnter)                //false 



// que. 2
// A discount is given if the user is a student (isStudent = true) or a senior (isSenior = false), but not if they are banned (isBanned = true). Check using ||, &&, and !.

// let isStudent = true ;
// let isSeniour = false ;
// let isBanned = true ;

// let isDiscountGiven = isStudent || ! isSeniour || !isBanned ;
// console.log(isDiscountGiven)                   //true 


// que. 3
// A form is valid if name is given (nameGiven = true) and (email or phone is given: emailGiven = false, phoneGiven = true). Check using && and ||.

// let nameGiven = true ;
// let emailGiven = false ;
// let phoneGiven = true ;
// let isFormValid = nameGiven && (emailGiven || phoneGiven)
// console.log(isFormValid)                            //true



// que. 4
// Access is allowed if (user is admin isAdmin = true or has a token hasToken = false) and not suspended (isSuspended = false). Check using ||, &&, and !.

// let isAdmin = true ;
// let hasToken = false ;
// let isSuspended = false ;

// let isAccessAllowed = (isAdmin || hasToken) && !isSuspended
// console.log(isAccessAllowed)                          //true 




// que. 5
// A game level opens if score is above 1000 (score = 1200) and (time bonus collected timeBonus = false or extra life extraLife = true). Check using && and ||.

// let score = 1200 ;
// let timeBonus = false ;
// let extraLife = true ;
// let isGameOpen = score>100 && timeBonus || extraLife;
// console.log(isGameOpen)                          //true




// que. 6
// Predict the output 

// The output should be ===> 20
    
// let a = 0;
// let b = 10;
// let c = 20;
// let result = a || b && c;
// console.log(result);




// que. 7
// Predict the output 

// The output should be ===> true 

// let p = true;
// let q = false;
// let r = true;
// let result = p && q || r;
// console.log(result);



// que. 8
// Predict the answer 

// the answer should be ==> true 

// let x = 10;
// let y = 20;
// let result = !(x && y) || (x > 5 && y < 30) && true;
// console.log(result);






// que. 9
// Predict the answer 

// the answer should be ==> 10

//     let a = 5;
// let b = 0;
// let c = 10;
// let result = a && b || c;
// console.log(result);





// que. 10
// Predict the answer 

// the answer should be ==>

// let val1 = false;
// let val2 = true;
// let val3 = false;
// let result = !(val1 || val2) && val3 || true;
// console.log(result);                            //true




















