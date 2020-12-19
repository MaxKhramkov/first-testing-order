"use strict";
/*
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"
*/

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('How many movies are you wached?', "");
        while(personalMovieDB.count == '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies are you wached?', "");
        }
    },

    detectPersonalLevel: function(){
        if(personalMovieDB.count <= 10) {
            console.log('you have sean not many movies.');
        } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
            console.log('you have sean many movies');
        } else if(personalMovieDB.count >= 30) {
            console.log('you love movies');
        } else{
            console.log('agan');
        }
    },

    rememberMyFilms: function() {
        for(let i = 0; i < 1; i++){
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
    },

    writeYourGenres: function() {
        for(let i = 1; i < 3; i++) {
            let askingGenres = prompt(`What is your favorit genres in movies ${i}:`, "");
            if(askingGenres === '' || askingGenres === null ) {
                console.log("please enter corect genere");
                i--; 
            } else {
                personalMovieDB.genres[i - 1] = askingGenres;
            }    
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`favorite genre # ${i} is "${item}".`);
        });
    },

    toggleVisibleMyDB: function(){
        let privetDB = confirm("Please make choise if your data base privet or no? ");
        if(privetDB === false){
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    },

    shwoMyDb: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel(); 
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.shwoMyDb(personalMovieDB.privat);


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