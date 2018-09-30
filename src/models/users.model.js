// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
  
    username: {

      type: String,

    },

    email: {
      type: String,
      lowercase: true,
      unique: true,
      validate: {

        validator: function( v ) {

          return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test( v )

        },

        message: props => `${ props.value } is not a valid email.`

      }
    },

    password: {
      type: String
    },
  
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
