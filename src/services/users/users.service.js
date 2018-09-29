// Initializes the `users` service on path `/users`
const createService = require('feathers-mongoose');
const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const passwordRegex = /^((?=.*\d{1,})(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[^\w\d\s:])([^\s]){6,64})(?<!([^ -~]))$/m

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/users', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('users');

  service.hooks(hooks);

  // A bit of custom validation, before anything is stored/sent to the server.
  service.hooks({

    before: {

      create( context ) {

        // If the provider is not from socketio, then throw an error. Disallow creation of accounts from outside the website.
        if( context.params.provider !== 'socketio' ) {

          throw new Error('Unfortunately, we don\'t offer account creation externally. Please, create the account on our website.')

        // Do a simple regex test of the password.
        } else if( !passwordRegex.test( context.arguments[0].password ) ) {

          throw new Error('Invalid password. Passwords has to contain between 6 - 64 characters, include a upper- and lowercase letter, a number and a symbol. ASCII characters are strictly forbidden.')

        }

      }

    }

  })
};
