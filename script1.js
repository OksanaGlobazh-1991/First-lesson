'use sctrict';

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');


// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let cat = prompt('Один из последних просмотренных фильмов?');
//     dog = +prompt('На сколько оцените его?');
//     a = prompt('Один из последних просмотренных фильмов?');
//     b = +prompt('На сколько оцените его?');

// personalMovieDB.movies[cat] = dog;
// personalMovieDB.movies[a] = b;


// console.log(personalMovieDB);

let numberOfFilms;

    do {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    } while (numberOfFilms == '' || numberOfFilms == null);

    // let = personalMovieDB.count;

if (numberOfFilms < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (numberOfFilms > 10 || numberOfFilms < 30) {
    alert("Вы классический зритель");
} else if (numberOfFilms > 30) {
    alert('Вы киноман!');
} else {
    alert("Произошла ошибка");
}

let cat;

    do {
        cat = prompt('Один из последних просмотренных фильмов?');
    } while (cat == '' || cat == null);

let dog;

    do {
        dog = +prompt('На сколько оцените его?');
    } while (dog == '' || dog == null);









    
    