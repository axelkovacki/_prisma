const RequestClient = require('../../services/request');
const Cache = require('../../services/cache');

async function index(request, reply) {
  const { url, method, payload } = request.body;

  const inCache = Cache.get(url);
  
  if (inCache !== undefined) {
    reply.send(inCache);
  }

  const data = await RequestClient.make(url, method, payload);
  reply.send(data);

  Cache.set(url, data);
}

function loading(request, reply) {
  setTimeout(() => reply.send({ content: 'Command sended' }), 7000);
}

module.exports = {
  index,
  loading
};