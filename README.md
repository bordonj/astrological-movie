# _Astrological Interests Selector_ :crystal_ball: :milky_way:
___


#### By: :electric_plug:
 * **Jennifer Bordon**
 * **Adrian Camacho**
 * **Godfrey Owidi**
 * **Gurshan Kaile**
 * **Kevin Funez**
___

## Technologies Used :floppy_disk:

|  |  |
|--|--|
|Git|HTML|
|CSS|Boostrap|
|jQuery|JavaScript|
|npm|webpack|
|[Astrology API](https://rapidapi.com/sameer.kumar/api/aztro)| [Movie API](https://rapidapi.com/apidojo/api/imdb8/pricing?utm_source=api-quota-85&utm_medium=email&utm_campaign=IMDb)|
___
## Description :pencil2:
* _The Astrological Interests Selector application consumes two APIs, Aztro and imdb. Aztro API provides data utilised to make the second call request to imdb API._
* _The imdb API response uses mood, compatability and color from the first call to retrieve information based on the user Zodiac._
* _After the user selects a zodiac choice provided on the UI, the UI displays all the relevant info for the respective zodiac sign, and the possible 'interests' based on queries from the Zodiac API info._
___
## Setup/Installation Requirements :triangular_ruler:
* Clone this project `git clone https://github.com/bordonj/astrological-movie.git` into your preferred directory
* In that directory, there should now be a directory labeled "astrological-movie"
* Follow the links above to get your _API keys_.
* Once you have your keys, store them into a `.env` file and **don't** forget to add it to your `.gitignore` file.
* run `npm i` to install respective plugins/packages
* run `npm start` to go see a live server of the app
___

## Known Bugs :bug:

* _Not necessarily a bug, but because we had to run multiple API calls after another for the IMDb API (due to its restriction of calls/sec), it may take about 5 seconds for the IMDb API elements to load onto the DOM after selecting one's zodiac sign_
___
## License :guardsman:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Contact Information :email:

- _jennifer.bordon@gmail.com_
- _adriancamacho18@gmail.com_
- _godfreyowiidi@gmail.com_
- _gurshankaile206@gmail.com_
- _kevin.funez315@gmail.com_
