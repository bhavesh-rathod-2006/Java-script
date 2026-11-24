

// =====================================>    Task 16     <===========================================

// =======================> D - Mini Assignment 4: Temperature of the Week <==========================


// ========>            <========
// ========>  Part - D  <========
// ========>            <========



// Tasks:

// 1. Print the temperature of each day.
// 2. Find and print:
    // Highest temperature + day
    // Lowest temperature + day
    // Average temperature of the week
    
// 3. Print a warning if any day has temperature ≥ 35:
// Heat Alert on <Day>




const temperatures = [
    ["Monday", 32],
    ["Tuesday", 35],
    ["Wednesday", 30],
    ["Thursday", 28],
    ["Friday", 33],
    ["Saturday", 36],
    ["Sunday", 31]
];

let highestTemp = temperatures[0][1] ;
let lowestTemp = temperatures[0][1] ;
let highestTempDay = "";
let lowestTempDay = "";

let totalTemp = 0 ;

for( let i = 0 ; i < temperatures.length ; i++ ){
    let day = temperatures[i][0];
    let daysTemperature = temperatures[i][1];
    
    if(daysTemperature > highestTemp){
        highestTemp = daysTemperature ;
        highestTempDay = day;
    }
    
    if(daysTemperature < lowestTemp){
        lowestTemp = daysTemperature ;
        lowestTempDay = day ;
    }

    console.log(` Temperature: ${daysTemperature} on day: ${day}`);
   

 
    
    totalTemp += temperatures[i][1];
    

    if( daysTemperature >= 35 ){
        console.log(` warning: Heat Alert on ${day}`)
    }

     console.log()

    }

     console.log(`Highest Temperature: ${highestTemp} on day: ${highestTempDay}`);
    console.log(`Lowest Temperature: ${lowestTemp} on day: ${lowestTempDay}`);

    let averageTemp = totalTemp/temperatures.length ;
    console.log(`Average Temperature of weak: ${averageTemp}`);

 


