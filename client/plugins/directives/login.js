
import Vue from 'vue'

export const _Login = () => {

    Vue.directive('login', {

        bind: ( el, binding, vnode ) => {

            el.addEventListener('submit', e => {

                e.preventDefault()

                const obj       = {}
                const mods      = binding.modifiers

                for( const key in mods ) {

                    console.log( key )

                }

            })

        }

    })

}

export default _Login()