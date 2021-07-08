import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Movie from './js/movie-service';
import Zodiac from './js/astrology-service';
//console.log('ZODIAC KEY', process.env.ZODIAC_API_KEY);

let createImg = (sign) => {
  let imgElement = document.createElement('img');
  imgElement.src=`https://www.astrology-zodiac-signs.com/images/${sign}.jpg`;
  // imgElement.src=`/assets/images/${sign}.jpeg`;
  imgElement.id=`sign${sign}`;
  imgElement.style='float: right; border-radius: 300px; width: 150px';
  return imgElement;
};

// data.d.i, i is the key in the movie object for image
// data.d is the array for each movie
// data.d.l is the title
let showMovies = (data) => {
  $('.movieResults').val('');
  console.log('in showMovies, data', data);
  for (let movie of data.data.d) {
    console.log('movie', movie);
    if (!movie.i) {
      if (movie.q) {
        const {l, s, rank, id} = movie;
        const movieEl = document.createElement('div');
  
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <a href='https://imdb.com/title/${id}' target='_blank'>
          <img src="https://avatars.githubusercontent.com/u/16786985?v=4" alt="${l}">
        </a>
        <div class="movie-info">
          <h6>${l}</h6>
          <span class="green">${rank}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>People: <span id='people'>${s}</span></p>
          <p>Type: <span id='type'>N/a<span></p>
        </div>
        `;
        $('.movieResults').append(movieEl);
      } else if (movie.s) {
        const {l, s, rank, id} = movie;
        const movieEl = document.createElement('div');
  
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <a href='https://imdb.com/name/${id}' target='_blank'>
          <img src="https://avatars.githubusercontent.com/u/16786985?v=4" alt="${l}">
        </a>
        <div class="movie-info">
          <h6>${l}</h6>
          <span class="green">${rank}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>People: <span id='people'>${s}</span></p>
          <p>Type: <span id='type'>N/a<span></p>
        </div>
        `;
        $('.movieResults').append(movieEl);
      }
      
    } else if (!movie.y) {
      if (!movie.rank) {
        const {l, s, id} = movie;
        const img = movie.i.imageUrl;
        const movieEl = document.createElement('div');

        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <a href='https://imdb.com/title/${id}' target='_blank'>
          <img src="${img}" alt="${l}">
        </a>
        <div class="movie-info">
          <h6>${l}</h6>
          <span class="green">N/a</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>People: <span id='people'>${s}</span></p>
          <p>Type: <span id='type'>Actor<span></p>
        </div>
        `;
        $('.movieResults').append(movieEl);
      } else {
        const img = movie.i.imageUrl;
        const {l, s, rank, id} = movie;
        const movieEl = document.createElement('div');

        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <a href='https://imdb.com/name/${id}' target='_blank'>
          <img src="${img}" alt="${l}">
        </a>
        <div class="movie-info">
          <h6>${l}</h6>
          <span class="green">${rank}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>People: <span id='people'>${s}</span></p>
          <p>Type: <span id='type'>Actor<span></p>
        </div>
        `;
        $('.movieResults').append(movieEl);
      }

    } else {
      const img = movie.i.imageUrl;
      const {l, y, s, q, id} = movie;
      const movieEl = document.createElement('div');

      movieEl.classList.add('movie');
      movieEl.innerHTML = `
      <a href='https://imdb.com/title/${id}' target='_blank'>
        <img src="${img}" alt="${l}">
      </a>
      <div class="movie-info">
        <h6>${l}</h6>
        <span class="green">${y}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        <p>People: <span id='people'>${s}</span></p>
        <p>Type: <span id='type'>${q}<span></p>
      </div>
      `;
      $('.movieResults').append(movieEl);
    }
  }

};


async function getColorCompatMood(color, compatibility, mood) {
  const colorPromise = await Movie.fetchData(color);
  const compatibilityPromise = await Movie.fetchData(compatibility);
  const moodPromise = await Movie.fetchData(mood);
  let results = await Promise.all([colorPromise, compatibilityPromise, moodPromise]);

  for(let promise of results) {
    showMovies(promise);
  }
}

$(document).ready(function() {
  $('.start').on('click', () => {
    $('.jumbotron').hide();
    $('.form').fadeIn();
    $('.start').hide();
  });
  $('.form').on('submit', (e) => {
    e.preventDefault();
    let zodiacSelect = $('#zodiacSelect').val();
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

        $('#zodiacInput').text(zodiacSelect.toUpperCase());
        $(`#color`).text(color);
        $(`#compatibility`).text(compatibility);
        $(`#time`).text(luckyTime);
        $('.quotation').text(description);
        $(`#date`).text(date);
        $(`#number`).text(luckyNum);
        $(`#mood`).text(mood);
        getColorCompatMood(color, compatibility, mood);
      });

    $('.form').hide();
    let img = createImg(zodiacSelect.toLowerCase());
    $('.zodiacResults').prepend(img);
    $('.results').fadeIn();
  });
});