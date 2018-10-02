
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
            const arg               = binding.arg

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

                // Validate against a target
                case 'target': {

                    const mod           = binding.modifiers

                    for( const property in mod ) {

                        const exp           = binding.expression
                        const target        = vnode.context[ property ]

                        if( exp ) toggleValid( Vue.$_Test[ exp ]( el.value ) && el.value === target )
                        else if( !exp && typeof Vue.$_Test[ property ] !== 'undefined' ) toggleValid( Vue.$_Test[ property ]( el.value ) && el.value === target )
                        else return console.error('error', 'Could not find a valid modifier. You provided: "' + property + '". This includes unable to find a modifier in our default ones. If you want to add default modifiers, please see the documentation.')

                    }

                }

            }

        }

    })

}

export default _Validate()