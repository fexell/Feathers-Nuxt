
import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

const _Notifications = {

    // Check https://se-panfilov.github.io/vue-notifications/#/ for more info about options and alternatives to iziToast
    install( Vue, options) {

        Vue.Toast = ({ title, message, type, timeout, cb }) => {

            if( type === VueNotifications.types.warn ) type = 'warning'

            return iziToast[type]({ title, message, timeout: 5000, icon: 'material-icons' })

        }

        // Setup the notifications mixin
        Vue.mixin({

            notifications: {

                error: {

                    type: 'error',
                    title: 'Error',
                    message: 'This is an error notification.'

                },

                warn: {

                    type: 'warn',
                    title: 'Warning',
                    message: 'This is a warning notification.'

                },

                info: {

                    type: 'info',
                    title: 'Information',
                    message: 'This is an info notification.'

                },

                success: {

                    type: 'success',
                    title: 'Success',
                    message: 'This is a success notification.'

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