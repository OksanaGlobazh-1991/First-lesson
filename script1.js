'use sctrict';

let numberOfFilms;

do {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
} while (numberOfFilms == '' || numberOfFilms == null);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман!');
} else {
    alert("Произошла ошибка");
}



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
// let cat;

//     do {
//         cat = prompt('Один из последних просмотренных фильмов?');
//     } while (cat == '' || cat == null || cat.length < 50);

// let dog;

//     do {
//         dog = +prompt('На сколько оцените его?');
//     } while (dog == '' || dog == null);

console.log(personalMovieDB);

// let numberOfFilms;

//     do {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     } while (numberOfFilms == '' || numberOfFilms == null);

//     // let = personalMovieDB.count;

// if (numberOfFilms < 10) {
//     alert("Просмотрено довольно мало фильмов");
// } else if (numberOfFilms > 10 || numberOfFilms < 30) {
//     alert("Вы классический зритель");
// } else if (numberOfFilms > 30) {
//     alert('Вы киноман!');
// } else {
//     alert("Произошла ошибка");
// }

// let cat;

//     do {
//         cat = prompt('Один из последних просмотренных фильмов?');
//     } while (cat == '' || cat == null || cat.length < 50);

// let dog;

//     do {
//         dog = +prompt('На сколько оцените его?');
//     } while (dog == '' || dog == null);









    
    