const IndexController = require('../controllers/index');

module.exports = function (fastify, opts, next) {
  fastify.post('/', async (request, reply) => IndexController.index(request, reply));
  fastify.get('/loading', async (request, reply) => IndexController.loading(request, reply));

  next();
}