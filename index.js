const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.get('/health-check', function (req, res) {
  res.sendStatus(200);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});