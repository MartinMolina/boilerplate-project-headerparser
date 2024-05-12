require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors'); // so that the API is remotely testable by FCC

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));

// front page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// get header JSON
app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
});

// listen for requests
var listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});