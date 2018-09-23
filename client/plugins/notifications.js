
import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

//import Noty from 'noty'
//import 'noty/lib/noty.css'

const _Notifications = {

    install( Vue, options) {

        Vue.Toast = ({ title, message, type, timeout, cb }) => {

            if( type === VueNotifications.types.warn ) type = 'warning'
            //return new Noty({ progressBar: true, layout: 'bottomRight', text: message, timeout: 5000, type }).show()

            return iziToast[type]({ title, message, timeout: 5000, icon: 'material-icons' })

        }

        Vue.mixin({

            notifications: {

                error: {

                    type: 'error',
                    title: 'Error',
                    message: 'Hello there'

                },

                warn: {

                    type: 'warn',
                    title: 'Warning',
                    message: 'This is a warning.'

                },

                info: {

                    type: 'info',
                    title: 'Information',
                    message: 'This is an info message.'

                }

            }

        })

        Vue.prototype.$_toast = Vue.Toast

    }

}

Vue.use(_Notifications)

const options = {

    success: Vue.Toast,
    error: Vue.Toast,
    info: Vue.Toast,
    warn: Vue.Toast

}

Vue.use(VueNotifications, options)