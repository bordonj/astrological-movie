import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';



// import { Project } from 'js/project';
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
    $('.form').hide();
    let img = createImg(zodiacSelect.toLowerCase());
    $('.zodiacResults').prepend(img);
    $('.results').fadeIn();
  });
});




































//WIP code below is functionality for the service js files
// console.log('aztro key', process.env.API_KEY);
var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
  params: {sign: 'cancer', day: 'today'},
  headers: {
    'x-rapidapi-key': `${process.env.API_KEY}`,
    'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log('zodiac', response.data);
}).catch(function(error) {
  console.error(error);
});


// //powerful query
// var optionsIMDb = {
//   method: 'GET',
//   url: 'https://imdb8.p.rapidapi.com/auto-complete',
//   params: {q: `happy`},
//   headers: {
//     'x-rapidapi-key': `${process.env.API_KEY}`,
//     'x-rapidapi-host': 'imdb8.p.rapidapi.com'
//   }
// };
// try {
//   axios.request(optionsIMDb).then(res => {
//     console.log('optionsIMDb', res.data);
//   });

// } catch (err) {
//   console.error(err);

// }
