
import Vue from 'vue'

// This plugin is pretty self-explanatory. It's just a plugin for authentication.

const _Authentication = () => {

    Vue.authenticate = async () => {

        const token = window.localStorage.getItem('feathers-jwt')

        if( !token ) {

            return console.error('Could not find the access token.')

        } else {

            const payload = Vue.app.passport.verifyJWT( token ).then((data) => console.log(data)).catch((error) => console.log(error))

        }

    }

}

Vue.use(_Authentication)