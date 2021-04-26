'use sctrict';

let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман!');
} else {
    alert("Произошла ошибка");
    }
}
detectPersonalLevel();


function rememberMyFilms(){
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
}
rememberMyFilms();

console.log(personalMovieDB);










    
    