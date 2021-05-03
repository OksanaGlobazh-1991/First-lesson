'use sctrict';

let writeYourGenres;

let personalMovieDB = {

    count: function start () {
    
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }

    },

        
    movies: function rememberMyFilms() {
        for (i=0; i < 2; i++) {
            let cat;
        
            do {
                cat = prompt('Один из последних просмотренных фильмов?');
            } while (cat == '' || cat == null || cat.length > 50);
        
            let dog;
        
            do {
                dog = +prompt('На сколько оцените его?');
            } while (dog == '' || dog == null);
            personalMovieDB.movies[cat] = dog;
            }
        },


    actors: {},
    genres: function writeYourGenres() {
        for (let i=1; i <= 3; i++) {
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
                while (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null) {
                    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
                }              
            }                
        },


    privat: function showMyDB(hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        }
}; 






personalMovieDB.count();
personalMovieDB.movies();
personalMovieDB.genres();
personalMovieDB.privat();
console.log(personalMovieDB);



// personalMovieDB.genres[i - 1].forEach(function(item, i, personalMovieDB.genres[i - 1]) {
//     console.log(`Любимый жанр # ${i} - это ${item}`);  
//     });
    