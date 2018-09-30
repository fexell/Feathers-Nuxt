
import Vue from 'vue'

const _Register = () => {

    const usernameRegex = /^[-\w\.\$@\*\!]{5,30}$/i
    const usernameTest = ( username ) => { return usernameRegex.test( username ) }

    // Email Regex
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailTest = ( email ) => { return emailRegex.test( email ) }

    // Password Regex
    const passwordRegex = /^((?=.*\d{1,})(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[^\w\d\s:])([^\s]){6,64})(?<!([^ -~]))$/m
    // All characters should be allowed when creating a password. However, there are certain ASCII characters
    // that should be blocked. These are usually ASCII characters that cannot be "printed", as in, printed to paper, such as a TAB,
    // DEL, etc. /^((?=.*\d{1,})(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[^\w\d\s:])([^\s]){6,64})(?<!([^ -~]))$/m
    // matches all characters, with a minimum of 6 characters, and maximum
    // of 64 characters and does a NEGATIVE LOOKBEHIND for any inavlid/illegal ASCII characters.
    //
    // Password returns true only if:
    // - Contains 1 upper- and lowercase letter.
    // - Contains at least 1 number
    // - Contains at least 1 symbol, example: !"#¤%&/()=?
    //
    // Password validation is also checked on Feathers, in the 'users.service.js'
    const passwordTest = ( password ) => { return passwordRegex.test( password ) }

    Vue.mixin({

        methods: {

            // Register method. Usage: <form @submit.prevent="Register(username, email, password, confirm)"></form>.
            // Email and password represents data props.
            Register: ( username, email, password, confirm ) => {

                // Simple validation

                // If username, email or password is empty.
                if ( !username || !email || !password ) return Vue.Logger('error', 'You cannot leave a field empty.')

                // If username doesn't pass our regex.
                else if( !usernameTest( username ) ) return Vue.Logger('error', 'Username can only be between 5 - 30 letters in length.')

                // If email doesn't pass our email regex.
                else if( !emailTest( email ) ) return Vue.Logger('error', 'Invalid email.')

                // If password doesn't pass our password regex.
                else if( !passwordTest( password ) ) {
                    Vue.Logger('error', 'Invalid password.')
                    Vue.Logger('error', 'Password needs to be between 6 - 64 characters, contain one upper- and lowercase letter, a number and a symbol.')

                    return
                }
                
                // Confirm password
                else if( password !== confirm ) return Vue.Logger('error', 'Password confirm failed. Please, make sure they are the same.')
                else {

                    // Emit create to feathers
                    Vue.socket.emit('create', 'users', {

                        username: username,
                        email: email,
                        password: password

                    }, (error, message) => {

                        // If Feathers found an error, show it as a notification and in the console.
                        if( error ) return Vue.Logger('error', error.message.replace(/(email\:)/gmi, ''))

                        // Otherwise, if registration is successful, emit the success.
                        Vue.app.emit('success', 'User created. You can now login with ' + message.email + ' .')

                    })

                }

            }

        }

    })

}

Vue.use(_Register)