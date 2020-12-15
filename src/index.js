require('dotenv').config();
const server = require('./server');

function start() {
  try {
    server.start();
  } catch(err) {
    console.log(err);
  }
}

start();