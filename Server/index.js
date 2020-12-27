const express = require('express');
const App = express();

App.use(express.static('Client/Dist'));
App.use(express.json());

App.get('/', (req, res) => (
  console.log('Hi there, you conencted to the server')
));

App.listen(3000, () => (
  console.log('Listening on port 3000')
))