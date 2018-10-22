// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
	const mongooseClient = app.get('mongooseClient');
	const users = new mongooseClient.Schema({

		username: {

			type: String,
			validate: {

				validator: function( v ) {

					/* eslint-disable-next-line */
					return /^[-\w\.\$@\*\!]{5,30}$/.test( v )

				},

				message: props => `${ props.value } is not a valid username.`

			}

		},

		email: {
			type: String,
			lowercase: true,
			unique: true,
			validate: {

				validator: function( v ) {

					/* eslint-disable-next-line */
					return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test( v )

				},

				message: props => `${ props.value } is not a valid email.`

			}
		},

		password: {
			type: String
		},

		prevToken: {
			type: String,
			unique: true,
		}


	}, {
		timestamps: true
	});

	return mongooseClient.model('users', users);
};
