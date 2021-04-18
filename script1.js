'use sctrict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');


let personalMovieDB = {
    count: alert(numberOfFilms),
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

let cat = prompt('Один из последних просмотренных фильмов?');

let dog = +prompt('На сколько оцените его?');

let movies = {
    'login': cat,
    'book': dog,
};