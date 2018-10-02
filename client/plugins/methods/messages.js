
import Vue from 'vue'

export const _Messages = () => {

    // Default messages
    Vue.$_Messages = {

        error: {

            empty: { default: 'You cannot leave a field empty.', specific: ( data ) => 'You cannot leave ' + data + ' empty.'  },
            email: { empty: 'You cannot leave email empty.', invalid: 'Invalid email. Please retype it, or, provide an actual email.' },
            username: { empty: 'You cannot leave username empty.', invalid: 'Invalid username. Please, provide a valid username.' },
            password: { empty: 'You cannot leave password empty.', invalid: 'Invalid password. Your password does not match our <a href="#modal">criteria</a> for a valid password.' }

        },

        success: {

            login: { default: 'You are now logged in.', withUsername: ( username ) => 'Welcome, ' + username + '. You are now logged in.' }

        }

    }

}

export default _Messages()