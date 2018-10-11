import Vue from 'vue'

export const _Protected = () => {

    Vue.$Protected = async () => {

        const accessToken = window.localStorage.getItem('feathers-jwt')

        Vue.socket.emit('authenticate', {

            strategy: 'jwt',
            accessToken: accessToken

        }, ( message, data ) => {

            if( !data ) {

                return $nuxt._router.replace('/') || $nuxt._router.push('/')

            } else if ( !Vue.app.passport.verifyJWT( data.accessToken ) ) {

                return Vue.$Store.commit('Logout')

            }

        })

    }

    Vue.directive('protected', {

        inserted: ( el, binding, vnode ) => {

            Vue.$Protected()

        }

    })

}

export default _Protected()