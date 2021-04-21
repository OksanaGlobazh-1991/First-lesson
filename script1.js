'use sctrict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

let cat = prompt('Один из последних просмотренных фильмов?');
    dog = +prompt('На сколько оцените его?');
    a = prompt('Один из последних просмотренных фильмов?');
    b = +prompt('На сколько оцените его?');

personalMovieDB.movies[cat] = dog;
personalMovieDB.movies[a] = b;


console.log(personalMovieDB);

