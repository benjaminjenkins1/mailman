var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const config = require('./config');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.SENDGRID_API_KEY);

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', function (req, res) {
  const msgHTML = req.body.text + '<br>From: ' + req.body.name + '<br>Email: ' + req.body.email;
  const msg = {
    to: config.TO_ADDRESS,
    from: config.FROM_ADDRESS,
    subject: req.body.subject,
    html: msgHTML
  };
  if(req.body.name && req.body.subject && req.body.text) {
    sgMail.send(msg);
    res.redirect(req.body.success_redirect);
    console.log("Sent a message.");
    console.log("Redirected to " + req.body.success_redirect);
  }
  else {
    res.redirect(req.body.failure_redirect);
    console.log("Failed to send a message.");
    console.log("Redirected to " + req.body.failure_redirect);
  }
});

app.listen(config.APP_PORT, config.APP_HOST, () => {
  console.log(`Mailman listening at ${config.APP_HOST}:${config.APP_PORT}...`);
});