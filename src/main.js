import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Movie from './js/movie-service';
import Zodiac from './js/astrology-service';
console.log('ZODIAC KEY', process.env.ZODIAC_API_KEY);
// async function getZodiacElements(zodiacSign) {
//   const response = await Zodiac.fetchData(zodiacSign);

//   let color = response.data.color;
//   let compatibility = response.data.compatibility;
//   let luckyTime = response.data.lucky_time;
//   let description = response.data.description;
//   let date = response.data.date_range;
//   let luckyNum = response.data.lucky_number;
//   let mood = response.data.mood;

//   $(`#color`).text(color);
//   $(`#compatibility`).text(compatibility);
//   $(`#time`).text(luckyTime);
//   $(`#description`).text(description);
//   $(`#date`).text(date);
//   $(`#number`).text(luckyNum);
//   $(`#mood`).text(mood);
  
// const colorPromise = Movie.fetchData(color);
// const compatibilityPromise = Movie.fetchData(compatibility);
// const moodPromise = Movie.fetchData(mood);
// Promise.all([colorPromise, compatibilityPromise, moodPromise]).then(function(promiseResponse) {
//   let movieArray = [];
//   console.log('hello', promiseResponse);
//   for (let movies of promiseResponse) {
//     console.log("movis", movies);
//     movieArray.push(movies);
//     console.log('movie index', movies);
//     for (const movie of movieArray) {
//       console.log("inner movies", movieArray);
//       $('.movieResults').append(`<img src="${movie.data.d.i.imageUrl}">`);
//     }
//   }
//   console.log("movie array", promiseArray);
//   $('.movieResults').html(firstMovieArray);
// });

// }



let createImg = (sign) => {
  let imgElement = document.createElement('img');
  imgElement.src=`https://www.astrology-zodiac-signs.com/images/${sign}.jpg`;
  // imgElement.src=`/assets/images/${sign}.jpeg`;
  imgElement.id=`sign${sign}`;
  imgElement.style='float: right; border-radius: 300px; width: 150px';
  return imgElement;
};

$(document).ready(function() {
  $('.start').on('click', () => {
    $('.jumbotron').hide();
    $('.form').fadeIn();
    $('.start').hide();
  });
  $('.form').on('submit', (e) => {
    e.preventDefault();
    let zodiacSelect = $('#zodiacSelect').val();
    // getZodiacElements(zodiacSelect);
    Zodiac.fetchData(zodiacSelect)
      .then(response => {
        if(response instanceof Error) {
          throw Error (`Zodiac API error: ${response.message}`);
        }
        console.log('hello', response);
        let color = response.data.color;
        console.log('red', color);
        let compatibility = response.data.compatibility;
        let luckyTime = response.data.lucky_time;
        let description = response.data.description;
        let date = response.data.date_range;
        let luckyNum = response.data.lucky_number;
        let mood = response.data.mood;
      
        $(`#color`).text(color);
        $(`#compatibility`).text(compatibility);
        $(`#time`).text(luckyTime);
        $(`#description`).text(description);
        $(`#date`).text(date);
        $(`#number`).text(luckyNum);
        $(`#mood`).text(mood);
      });

    $('.form').hide();
    let img = createImg(zodiacSelect.toLowerCase());
    $('.zodiacResults').prepend(img);
    $('.results').fadeIn();
  });
});