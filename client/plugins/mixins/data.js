
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

                validation: {

                    username: ( username ) => Vue.$_Test.username( username ),
                    email: ( email ) => Vue.$_Test.email( email ),
                    password: ( password ) => Vue.$_Test.password( password )

                }

            }

		}

    })

}

export default _Data()
