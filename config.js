 // config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  dbString: process.env.DB_STRING,
  port: process.env.PORT
};
