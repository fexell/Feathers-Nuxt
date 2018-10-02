
import Vue from 'vue'

export const _Register = () => {

    Vue.directive('register', {

        bind: ( el, binding, vnode ) => {

            el.addEventListener('submit', e => {

                e.preventDefault()

                const inputs = el.querySelectorAll('input')

                for( const key in inputs ) {

                    const input = inputs[ key ]

                }

            })

        }

    })

}

export default _Register()