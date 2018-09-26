
import Vue from 'vue'

const _Register = () => {

    Vue.directive('register', {

        bind: function( el, binding, vnode ) {

            el.addEventListener('submit', (event) => {

                event.preventDefault()

                const context = vnode.context.$data
                const map = new Map(Object.entries(context))

                map.forEach((data) => {

                    console.log(el)

                    //if( !data ) return Vue.app.emit('error', 'You cannot leave ' + binding + ' field empty.')

                })

            })

        }

    })

}

Vue.use(_Register)