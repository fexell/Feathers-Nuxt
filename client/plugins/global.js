import Vue from 'vue'

const _Global = () => {

    // Global mixin
    Vue.mixin({

        data: function() {

            return {

                // Global regex props
                regex: {

                    username: Vue.$_Regex.username,
                    email: Vue.$_Regex.email,
                    password: Vue.$_Regex.password

                },

                validation: {

                    username: ( username ) => Vue.$_Test.username( username ),
                    email: ( email ) => Vue.$_Test.email( email ),
                    password: ( password ) => Vue.$_Test.password( password )

                }

            }

        }

    })

    // Default messages
    Vue.$_DefaultMessages = {

        error: {

            empty: 'Something turned up empty.',
            email: { empty: 'You cannot leave email empty.', invalid: 'Invalid email. Please retype it, or, provide an actual email.' },
            username: { empty: 'You cannot leave username empty.', invalid: 'Invalid username. Please, provide a valid username.' },
            password: { empty: 'You cannot leave password empty.', invalid: 'Invalid password. Your password does not match our <a href="#modal">criteria</a> for a valid password.' }

        },

        success: {

            login: { default: 'You are now logged in.', withUsername: ( username ) => 'Welcome, ' + username + '. You are now logged in.' }

        }

    }

    // Regexes'
    Vue.$_Regex = {

		username: /^[-\w\.\$@\*\!]{5,30}$/,
		email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
		password: /^((?=.*\d{1,})(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[^\w\d\s:])([^\s]){6,64})(?<!([^ -~]))$/m

    }
    
    // Test against the regexes'
	Vue.$_Test = {

        // Simple username regex function that returns "false" or "true"
        username: ( username ) => {

            return Vue.$_Regex.username.test( username )

        },

        // Simple email regex function that returns "false" or "true"
        email: ( email ) => {

            return Vue.$_Regex.email.test( email )

        },

        // Simple password regex function that returns "false" or "true"
        password: ( password ) => {

            return Vue.$_Regex.password.test( password )

        }

    }
    
    // Global stream functions
    Vue.$_Stream = {

        Login: ( email, password ) => {

            return new Promise( ( resolve, reject ) => {

                // If email is empty
                if( !email ) reject( Vue.$_DefaultMessages.error.email.empty )
                // If password is empty
                else if( !password ) reject( Vue.$_DefaultMessages.error.password.empty )

                // If email doesn't pass the validation regex
                else if( !Vue.$_Test.email( email ) ) reject( Vue.$_DefaultMessages.error.email.invalid )
                // If password doesn't pass the validation regex
                else if( !Vue.$_Test.password( password ) ) reject( Vue.$_DefaultMessages.error.password.invalid )
                // If everything was successful, resolve our promise
                else resolve( Vue.$_DefaultMessages.success.login.default )

            })

        },

        Register: ( data ) => {

            return new Promise( ( resolve, reject ) => {

                for( const key in data ) {

                    if( data.hasOwnProperty( key ) ) continue

                    const index = data
                    const value = data[ key ]

                }

            })

        }

    }

    // Make our global Vue.XXXX objects or functions bound to the Vue prototype
    Vue.prototype.$defaultmessages              = Vue.$_DefaultMessages
    Vue.prototype.$regex                        = Vue.$_Regex
    Vue.prototype.$test                         = Vue.$_Test
    Vue.prototype.$stream                       = Vue.$_Stream

}

// Use our global plugin
Vue.use(_Global)