
import Vue from 'vue'

const _Authentication = () => {

    Vue.Relogin = () => {

        Vue.nextTick(function() {

            const authToken = window.localStorage.getItem('feathers-jwt')

            if( !authToken ) return Vue.app.emit('error', 'No authentication token to read from.')
            else {

                const verify = Vue.app.passport.verifyJWT( authToken )

                if( !verify ) return Vue.app.emit('error', 'This is not a valid authentication token.')
                else {

                    Vue.app.service('users').emit('authenticate', {

                        strategy: 'jwt',
                        accessToken: authToken

                    }, function(message, data) {
                        
                        Vue.token = data.accessToken

                        return Vue.app.emit('success', 'You have are now logged in.')

                    })

                }

            }

        })

    }

}

Vue.use(_Authentication)