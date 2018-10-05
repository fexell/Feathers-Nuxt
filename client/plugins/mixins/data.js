
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

                },

				// Validation prop-functions
                validation: {

                    username: ( username ) => Vue.$_Test.username( username ),
                    email: ( email ) => Vue.$_Test.email( email ),
                    password: ( password ) => Vue.$_Test.password( password )

				}

            }

        },

		// Store some of the Vuex information and make them globally available
        computed: {

            userId: function() {

                return Vue.$Store.state.userId

            },

            username: function() {

                return Vue.$Store.state.username

            }

        }

    })

}

export default _Data()
