import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Movie from './js/movie-service';
import Zodiac from './js/astrology-service';

async function getZodiacElements(zodiacSign) {
  const response = await Zodiac.fetchData(zodiacSign);

  let color = response.data.color;
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
  
  const colorPromise = Movie.fetchData(color)
  const compatibilityPromise = Movie.fetchData(compatibility)
  const moodPromise = Movie.fetchData(mood)
  Promise.all([colorPromise, compatibilityPromise, moodPromise]).then(function(movieResponse) {
    console.log('hello', movieResponse)
    const moviesArray = movieResponse[0].data.d;
    for(const movie of moviesArray) {
      console.log("movis", movie.i.imageUrl)
      $('.movieResults').append(`<img src="${movie.i.imageUrl}">`);
    }
    console.log("movie array", moviesArray);
    // $('.movieResults').html(firstMovieArray);
  });

}



// color, compatibility & mood
// get movie elements data[0].d

// let getColorCompatMood = async function(color) {
  // let color = getZodiacElements(color)
  // let compatability =  getZodiacElements(compatability)
  // let mood =  getZodiacElements(mood)

  // Promise.all(color, compatability, mood).then
  
  // console.log("for movie2", data2);
  // console.log("for movie1", data1);


//getColorCompatMood(color);





// let data = Zodiac.fetchData('Virgo')

// for (res in data) {
//   console.log("display objects", res);
// }


//let data1 = Zodiac.fetchData('Virgo')
//console.log("description", data1);


//getZodiacElements('Virgo')

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
    console.log('zodiac input', zodiacSelect);
    getZodiacElements(zodiacSelect);
    $('.form').hide();
    let img = createImg(zodiacSelect.toLowerCase());
    $('.zodiacResults').prepend(img);
    $('.results').fadeIn();
  });
});