import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Movie from './js/movie-service';
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
}





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