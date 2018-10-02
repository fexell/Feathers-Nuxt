
import Vue from 'vue'

// Validate input data "on the fly"
export const _Validate = () => {

    Vue.directive('validate', {

        // If the value isn't prefilled, add class "invalid" to the input
        bind: ( el, binding, vnode ) => {

            if( !el.value ) el.classList.add('invalid')

        },

        // Update the validate check
        update: ( el, binding, vnode ) => {

            // What are we validating?
            // v-validate:username, v-validate:email, v-validate:password
            const arg = binding.arg

            // Make the class "toggle"/replace into a function
            const toggleValid = ( regex ) => {

                const bool = regex ? el.classList.replace('invalid', 'valid') : el.classList.replace('valid', 'invalid')
            
            }

            // Switch case bad on Vue "arg"
            switch( arg ) {

                // If it's username
                case 'username': {

                    toggleValid( Vue.$_Test.username( el.value ) )

                    break

                }

                // If it's email
                case 'email': {

                    toggleValid( Vue.$_Test.email( el.value ) )

                    break

                }
                
                // If it's password
                case 'password': {

                    toggleValid( Vue.$_Test.password( el.value ) )

                    break

                }

            }

        }

    })

}

export default _Validate()