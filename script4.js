'use sctrict';

let writeYourGenres;


let personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман!');
        } else {
            alert("Произошла ошибка");
            }
        },

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

    writeYourGenres: function () {
        for (let i=1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            while (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            }              
        }       
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);  
            });
                     
    },
 
    
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }

    },


    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
}; 






personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB.writeYourGenres);
personalMovieDB.count();


