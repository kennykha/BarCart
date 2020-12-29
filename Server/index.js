const express = require('express');
const App = express();
const axios = require('axios');

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
      'x-rapidapi-key': 'b8c833b839msh0c8c011cd1ad1dbp1928dbjsna047b39f62bd',
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
    }
  }
  axios.request(options)
    .then((success) => {
      const options = {
        method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/lookup.php',
        params: {i: `${success.data.drinks[0].idDrink}`},
        headers: {
          'x-rapidapi-key': 'b8c833b839msh0c8c011cd1ad1dbp1928dbjsna047b39f62bd',
          'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
        }
      };
      return axios.request(options)
    })
    .catch((err) => console.log(err))
    .then((drink) => console.log('DRINKKKKKKK', drink.data.drinks[0]))

  res.send('done')
});

App.listen(3000, () => (
  console.log('Listening on port 3000')
))