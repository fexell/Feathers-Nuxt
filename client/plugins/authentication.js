
import Vue from 'vue'

const _Authentication = () => {

    Vue.Relogin = () => {

        Vue.nextTick(function() {

            const authToken = window.localStorage.getItem('feathers-jwt')

            if( !authToken ) return Vue.app.emit('error', 'No authentication token to read from.')
            else {

                const verify = Vue.app.passport.payloadIsValid( authToken )
                
                if( !verify ) return Vue.app.emit('error', 'This is not a valid authentication token.')
                else {

                    Vue.socket.emit('authenticate', {

                        strategy: 'jwt',
                        accessToken: authToken

                    }, function(message, data) {

                        if( !data || !(Vue.app.passport.payloadIsValid( data.accessToken )) ) return Vue.app.emit('error', 'Not a valid authentication token.')
                        else {
                            Vue.app.emit('authentication successful')
                            Vue.app.emit('success', 'You have are now logged in.')
                        }

                    })

                }

            }

        })

    }

}

Vue.use(_Authentication)