
import Vue from 'vue'

const _Register = () => {

    // Email Regex
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailTest = (email) => { return emailRegex.test(email) }

    // Password Regex
    const passwordRegex = /(\S+)(?!=[\ -~]){6,64}/
    // All characters should be allowed when creating a password. However, there are certain ASCII characters
    // that should be blocked. These are usually ASCII characters that cannot be "printed", as in, printed to paper, such as a TAB,
    // DEL, etc. /(\S(?<=)){6,64}(?<![^\0-~]|[\127])/ matches all characters, with a minimum of 6 characters, and maximum
    // of 64 characters and does a NEGATIVE LOOKBEHIND for any inavlid/illegal ASCII characters.
    const passwordTest = (password) => { return passwordRegex.test(password) }

    Vue.directive('register', {

        bind: function( el, binding, vnode ) {

            el.addEventListener('submit', (event) => {

                event.preventDefault()

                const context = vnode.context.$data
                const map = new Map(Object.entries(context))

                map.forEach((data, index) => {

                    if( !data ) return Vue.app.emit('error', 'You cannot leave a field empty.')
                    else if( index === 'email' && !emailTest(data) ) return Vue.app.emit('error', 'The email "' + index + '" is not a valid email.')
                    else if( index === 'password' && !passwordTest(data) ) return Vue.app.emit('error', 'Your password has to be between 6 to 64 characters in length, and cannot contain ASCII characters.')

                })

            })

        }

    })

}

Vue.use(_Register)