
import Vue from 'vue'

const _Authentication = () => {

    Vue.authenticate = async () => {

        const token = window.localStorage.getItem('feathers-jwt')

        if( !token ) {

            return console.error('Could not find the access token.')

        } else {

            const payload = Vue.app.passport.verifyJWT( token ).then((data) => console.log(data)).catch((error) => console.log(error))

        }

    }

    Vue.mixin({

        mounted: function() {

            

        }

    })

}

Vue.use(_Authentication)