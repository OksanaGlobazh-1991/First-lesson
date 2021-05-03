'use sctrict';

let numberOfFilms;
let writeYourGenres;


let personalMovieDB = {

    count: numberOfFilms,

    start: function () {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    // detectPersonalLevel: function () {
    //     if (personalMovieDB.start < 10) {
    //         alert("Просмотрено довольно мало фильмов");
    //     } else if (personalMovieDB.start > 10 && personalMovieDB.start < 30) {
    //         alert("Вы классический зритель");
    //     } else if (personalMovieDB.start > 30) {
    //         alert('Вы киноман!');
    //     } else {
    //         alert("Произошла ошибка");
    //         }
    //     },
    rememberMyFilms: function () {
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

    movies: {},

    actors: {},

    genres: [],

    writeYourGenres: function () {
        for (let i=1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            while (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            }              
        }                
        },


    privat: false,
    
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat = false) {
            alert()
        }

    },


    showMyDB: function (hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        }
}; 






personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
showMyDB(personalMovieDB.privat);
console.log(personalMovieDB);
personalMovieDB.count();


// personalMovieDB.genres[i - 1].forEach(function(item, i, personalMovieDB.genres[i - 1]) {
//     console.log(`Любимый жанр # ${i} - это ${item}`);  
//     });
    