// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const director = moviesArray.map(movie => {
        return movie.director;
    })
    return director;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const directors = moviesArray.filter(x => x.director === "Steven Spielberg" && ((x.genre).includes('Drama')));
    if(directors.length === 2) {
        return 2;
    } else if (directors.length === 0) {
        return 0;
    } else if (directors.director !== "Steven Spielberg") {
        return 0;
    } else {
        return 4;
    }
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const movie = moviesArray.filter( x => x.score === 8.0);
    const sum = movie.reduce((prev, cur) => {
        return cur.score + prev;
    }, 0);
    const ave = sum / movie.length;

    if (movie.length === 0) {
        return 0;
    } else {
        return ave.toFixed(2);}
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovie = moviesArray.filter(x => (x.genre).includes('Drama'));
    const sum = dramaMovie.reduce((prev, cur) => {
        return cur.score + prev;
    }, 0);
    const ave = sum / dramaMovie.length;

    if (dramaMovie.length === 0) {
        return 0;
    } else {
        return parseFloat(ave);
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    moviesArray.sort(function (a,b) {
        if (a.title < b.title && a.year < b.year) {
            return -1;
        } if (a.title > b.title && a.year > b.year) {
            return 1;
          }
          return 0;
    })
    console.log(moviesArray);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {} 
