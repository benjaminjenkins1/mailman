var express = require('express');
var app = express();

const config = require('./config');
const sgMail = require('@sendgrid/mail');

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(config.PORT, config.HOST, () => console.log(`Example app listening at ${config.HOST}:${config.PORT}...`));