//import axios from "axios";
var axios = require("axios").default;

export default class Zodiac {
  static async fetchData(input) {
    var options = {
      method: 'POST',
      url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      params: {sign: `${input}`, day: 'today'},
      headers: {
        'x-rapidapi-key': `${process.env.ZODIAC_API_KEY}`,
        'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
      
    }
      };

      let data = await axios.request(options);
      return data;

  } catch(error) {
    console.error(error);
  
  }
}

