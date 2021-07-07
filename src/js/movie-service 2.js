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
      console.error(error);
    }
  }
}   
// ZODIAC_API_KEY=f307f52238msh3dcf619b228e213p15342djsn8de64caae052
// MOVIE_API_KEY=4007d6796bmshc37bf1cb11235f7p18a959jsnaf4c26b1e51d