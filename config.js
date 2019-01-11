require('dotenv').config();

const config = {
  TO_ADDRESS: process.env.TO_ADDRESS,
  FROM_ADDRESS: process.env.FROM_ADDRESS,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
};

module.exports = config;