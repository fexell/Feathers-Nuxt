
import Vue from 'vue'

const _Validate = () => {

    // Email Regex
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailTest = (email) => { return emailRegex.test(email) }

    // Password Regex
    const passwordRegex = /(\S(?<=)){6,64}(?<![^\0-~]|[\127])/
    // All characters should be allowed when creating a password. However, there are certain ASCII characters
    // that should be blocked. These are usually ASCII characters that cannot be "printed", as in, printed to paper, such as a TAB,
    // DEL, etc. /(\S(?<=)){6,64}(?<![^\0-~]|[\127])/ matches all characters, with a minimum of 6 characters, and maximum
    // of 64 characters and does a NEGATIVE LOOKBEHIND for any inavlid/illegal ASCII characters.
    const passwordTest = (password) => { return passwordRegex.test(password) }

    Vue.directive('validate-email', {

        bind: function( el, binding, vnode ) {

            if( !emailTest(el.value) ) return el.classList.add('invalid')

        },

        update: function( el, binding, vnode ) {

            while( !emailTest(el.value) ) {

                el.classList.remove('valid')
                el.classList.add('invalid')

                return
            }

            el.classList.remove('invalid')
            el.classList.add('valid')

        }

    })

    Vue.directive('validate-password', {

        bind: function( el, binding, vnode ) {

            if( !passwordTest(el.value) ) return el.classList.add('invalid')

        },

        update: function( el, binding, vnode ) {

            while( !passwordTest(el.value) ) {

                el.classList.remove('valid')
                el.classList.add('invalid')
                return

            }

            el.classList.remove('invalid')
            el.classList.add('valid')

        }

    })

}

Vue.use(_Validate)