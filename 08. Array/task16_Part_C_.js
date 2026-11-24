

// =====================================>    Task 16     <===========================================

// =======================> C - Mini Assignment 3: Movie Rating Analyzer <==========================


// ========>            <========
// ========>  Part - c  <========
// ========>            <========



// Tasks:

// 1. For each movie, calculate the average rating.
// 2. Print in this format:
    // Movie: Inception
    // Ratings: 9 8 9 10 8
    // Average Rating: 8.8
    // Verdict: Excellent

// 3. Verdict rules:
    // Average ≥ 9 → Excellent
    // Average ≥ 7 and < 9 → Good
    // Average < 7 → Average

// 4. Bonus: Find and print the movie with the highest average rating.


const movies = [
    ["Inception", [9, 8, 9, 10, 8]],
    ["Avatar", [7, 8, 7, 6, 8]],
    ["Interstellar", [10, 9, 9, 10, 9]],
    ["Joker", [8, 7, 8, 9, 8]]
];


let highestRating = 0 ;

for(let i = 0 ; i < movies.length ; i++ ){
    let movieNAme = movies[i][0];
    let movieRating = movies[i][1];
    let totalRating = 0 ;

    for( let j = 0 ; j < movieRating.length ; j++ ){
        totalRating += movieRating[j];
    }

    let averageRating = totalRating/movieRating.length;

    
    if(averageRating > highestRating){
        highestRating = averageRating;
        var highestRatingMovie = movieNAme ;
    }

    let Verdict = "";
    if(averageRating >= 9){
        Verdict = "Excellent"

    }else if(averageRating >= 7 && averageRating<9){
        Verdict ="Good"
    }else{
        Verdict = "Average"
    }

    console.log(`Movie: ${movieNAme}`)
    console.log(`Ratings: ${movieRating}`)
    console.log(`Average Rating: ${averageRating}`)
    console.log(`Verdict: ${Verdict}`)
    console.log("----------------------------")

}

console.log(`Highest Average Rating Movie: ${highestRatingMovie}`)
console.log()








