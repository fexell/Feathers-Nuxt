
import Vue from 'vue'

export const _Data = () => {

    // Global mixin
    Vue.mixin({

        data: function() {

            return {

                // Global regex props
                regex: {

                    username: Vue.$_Regex.username,
                    email: Vue.$_Regex.email,
                    password: Vue.$_Regex.password

                }

            }

        },

		// Store some of the Vuex information and make them globally available
        computed: {

            UserId: function() {

                return Vue.$Store.state.userId

            },

            Username: function() {

                return Vue.$Store.state.username

            },

            Email: function() {

                return Vue.$Store.state.email

            },

        }

    })

}

export default _Data()
