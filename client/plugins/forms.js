import Vue from 'vue'

export const _Forms = () => {

    let obj         = new Object()
        obj.forms   = new Object

    Vue.directive('form', {

        inserted: ( el, binding, vnode ) => {

            el.addEventListener('submit', ( e ) => {

                e.preventDefault()

                for( const key of obj.forms.list ) {

                    console.log( key.valid )

                    if( !key.valid ) return Vue.app.emit('error', 'Invalid ' + key.vname)

                }

            })

        },

        update: ( el, binding, vnode ) => {

            obj.forms.elements      = el.querySelectorAll('input')
            obj.forms.el            = el
            obj.forms.mods          = binding.modifiers
            obj.forms.args          = binding.arg
            obj.forms.data          = vnode.context.$data
            obj.forms.validation    = vnode.context.$data.validation()

            obj.forms.attrs         = (( arr = new Array() ) => {

                for( const element of obj.forms.elements ) {

                    arr.push( element.attributes )

                }

                return arr

            })( this.attrs )
            obj.forms.list          = (( list ) => {

                list                = []

                for( const key in obj.forms.mods ) {

                    list.push({
                        el: el.querySelector('[name="' + key + '"]') || el.querySelector('[type="' + key + '"]') || el.querySelector('[class*="' + key + '"]'),
                        vname: key,
                        value: obj.forms.data[ key ],
                        valid: obj.forms.validation[ key ]
                    })

                }

                return list

            })( this.list )

            for( const key of obj.forms.list ) {

                const toggleValid   = key.valid ? key.el.classList.add('valid') || key.el.classList.replace('invalid', 'valid') : key.el.classList.add('invalid') || key.el.classList.replace('valid', 'invalid')

            }

        }

    })

}

export default _Forms()