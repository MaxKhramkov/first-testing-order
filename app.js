"use strict";

const numberOfFilms = +prompt('How many movies are you wached?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("One of the lasted movies are you whatched?", ""),
      b = prompt("What is it rate? ", ""),
      c = prompt("One of the lasted movies are you whatched?", ""),
      d = prompt("What is it rate? ", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

