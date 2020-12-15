const Axios = require('axios');

async function make(url, method, payload = {}, headers = {}) {
  try {
    const { data } = await Axios[method](url, payload, {
      headers
    });
    return data;
  } catch(err) {
    const { data } = err.response;
    return data;
  }
}

module.exports = {
  make
}