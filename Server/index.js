const express = require('express');
const App = express();
const axios = require('axios');
const api_key = require('./config.js')

App.use(express.static('Client/Dist'));
App.use(express.json());

App.get('/drinks', (req, res) => {
  console.log(req.query.current)
  const currentSpirit = req.query.current;
  const options = {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
    // url:'https://the-cocktail-db.p.rapidapi.com/popular.php',
    params: {i: `${currentSpirit}`},
    // params: {i: 'GIN'},
    headers: {
      'x-rapidapi-key': `${api_key}`,
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
    }
  }
  axios.request(options)
    .then((success) => {
      let randomDrink = Math.floor(Math.random() * (success.data.drinks.length - 0)) + 0;
      console.log('RANDOM DRINK NUMBER', randomDrink)
      const options = {
        method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/lookup.php',
        params: {i: `${success.data.drinks[randomDrink].idDrink}`},
        headers: {
          'x-rapidapi-key': `${api_key}`,
          'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
        }
      };
      return axios.request(options)
    })
    .catch((err) => console.log(err))
    .then((drink) => {
      console.log(drink.data.drinks[0])
      res.status(200).send(drink.data.drinks[0])
    })
});

App.listen(3001, () => (
  console.log('Listening on port 3001')
))