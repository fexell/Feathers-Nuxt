import Vue from 'vue'

export const _Form = () => {

    Vue.directive('form', {

        // Once the form element is inserted into the DOM
        inserted: ( el, binding, vnode ) => {

            // Get the modifiers
            const mods                  = binding.modifiers

            // Get each element
            el.querySelectorAll('input').forEach( element => {

                for( const mod in mods ) {

                    // Add valid or invalid class to the input element, in case the validation fails or not
                    const toggleValid   = element.value && vnode.context.$data.validation()[ mod ] ? element.classList.add('valid') : element.classList.add('invalid')

                }

            })

        },

        // Bind
        bind: ( el, binding, vnode ) => {

            // Prevent the form from submitting
            el.addEventListener('submit', ( e ) => {

                e.preventDefault()

            })

        },

        // The meat of the code
        update: ( el, binding, vnode ) => {

            // Main object
            let obj                     = new Object()

            const args                  = binding.arg
            const mods                  = binding.modifiers
            const inputs                = el.querySelectorAll('input')

            obj.elements                = new Object()
            obj.elements.data           = new Array()
            obj.elements.attrs          = new Array()
            obj.elements.inputs         = inputs
            obj.elements.bindings       = { args: args, mods: mods }
            obj.elements.validation     = vnode.context.$data.validation()

            const data                  = (( data ) => {

                for( const mod in obj.elements.bindings.mods ) {

                    data                = obj.elements.data.push( vnode.context.$data[ mod ] )

                }

                return data

            })( this.data )

            const attributes            = (( attrs ) => {

                for( const key in obj.elements.inputs ) {

                    attrs               = !obj.elements.inputs[ key ].attributes ? delete obj.elements.inputs[ key ].attributes : obj.elements.attrs.push( obj.elements.inputs[ key ].attributes )

                }

                return attrs

            })( this.attrs )

            obj.elements.filter         = ( find ) => {

                return new Promise( resolve => {

                    obj.elements.inputs.forEach( input => {

                        for( const key of input.attributes ) {

                            if( key.value === find ) resolve( key.ownerElement )

                        }

                    })

                })

            }

            for( const key in obj.elements.bindings.mods ) {

                obj.elements.filter( key ).then(( element ) => {

                    const toggleValid = obj.elements.validation[ key ] ? element.classList.replace('invalid', 'valid') : element.classList.replace('valid', 'invalid')

                })

            }

            console.log( obj )

        }

    })

}

export default _Form()