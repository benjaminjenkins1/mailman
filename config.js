require('dotenv').config();

const config = {
  HOST: process.env.APP_HOST,
  PORT: process.env.APP_PORT,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
};

module.exports = config;