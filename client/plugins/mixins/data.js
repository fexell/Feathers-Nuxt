
import Vue from 'vue'
import * as Cookies from 'js-cookie'

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

                return this.$store.state.userId

            },

            Username: function() {

                return this.$store.state.username

            },

            Email: function() {

                return this.$store.state.email

            },

        }

    })

}

export default _Data()
