// api-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const api = new mongooseClient.Schema({
  
    email: {type: String, unique: true},
    password: { type: String },
  
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('api', api);
};
