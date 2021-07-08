//import axios from "axios";
var axios = require("axios").default;

export default class Movie {
  static async fetchData(Color) {
    var options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {q: `${Color}`},
      headers: {
        'x-rapidapi-key': `${process.env.MOVIE_API_KEY}`,
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    };

    try {
      let data = await axios.request(options);
      return data;
      
    } catch(error) {
      return error;
    }
  }
}   
