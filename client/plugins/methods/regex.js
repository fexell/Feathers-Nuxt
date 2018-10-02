
import Vue from 'vue'

export const _Regex = () => {

    // Regexes'
    Vue.$_Regex = {

		username: /^[-\w\.\$@\*\!]{5,30}$/,
		email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
		password: /^((?=.*\d{1,})(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[^\w\d\s:])([^\s]){6,64})$/m

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
                if( !email ) reject( Vue.$_Messages.error.email.empty )
                // If password is empty
                else if( !password ) reject( Vue.$_Messages.error.password.empty )

                // If email doesn't pass the validation regex
                else if( !Vue.$_Test.email( email ) ) reject( Vue.$_Messages.error.email.invalid )
                // If password doesn't pass the validation regex
                else if( !Vue.$_Test.password( password ) ) reject( Vue.$_Messages.error.password.invalid )
                // If everything was successful, resolve our promise
                else resolve( Vue.$_Messages.success.login.default )

            })

        },

        Register: ( data ) => {

            return new Promise( ( resolve, reject ) => {

                for( const key in data ) {

                    if( data.hasOwnProperty( key ) ) continue

                    const index = data
                    const value = data[ key ]

                    let result, password, confirm

                    if( !value ) reject(Vue.$_DefaultMessages.error.empty.specific( index ))
                    else if( /password/i.test( index ) ) password = value
                    else if( /confirm/i.test( index ) ) result = password === value ? true : false

                }

            })

        }

    }

}

export default _Regex()