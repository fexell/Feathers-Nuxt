const api = require('./api/api.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(api);
};
