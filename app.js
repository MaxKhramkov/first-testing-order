"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies are you wached?', "");

    while(numberOfFilms == '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies are you wached?', "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel(){
    if(numberOfFilms <= 10) {
        console.log('you have sean not many movies.');
    } else if(numberOfFilms > 10 && numberOfFilms < 30){
        console.log('you have sean many movies');
    } else if(numberOfFilms >= 30) {
        console.log('you love movies');
    } else{
        console.log('agan');
    }
}
detectPersonalLevel();

function rememberMyFilms() {
    for(let i = 0; i < 2; i++){
        const a = prompt("One of the lasted movies are you whatched?", ""),
              b = prompt("What is it rate? ", "");
        
        if (a != '' && a != null && a.length < 50 && b != '' && b != null ) {
            personalMovieDB.movies[a] = b;
            console.log('ok');
        } else{
            console.log('not ok');
            i--;
        }
    }
}
rememberMyFilms();

function writeYourGenres() {
    for(let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`What is your favorit genres in movies ${i}:`, "");
    }
}
writeYourGenres();

function shwoMyDb(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}
shwoMyDb(personalMovieDB.privat);

/* 

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
Проверить, чтобы все работало без ошибок в консоли 
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами
*/

/* Задание на урок:
1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
*/