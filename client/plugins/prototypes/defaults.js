
import Vue from 'vue'
import Store from '../../store/index'

export const _Defaults = ( Vue, options ) => {

    // Bind the connection to Vue's prototype (and this.$_connection),
	// and run the connection asap.
	Vue.prototype.$Connection 			        = Vue.Connection()

    // Make our global Vue.XXXX objects or functions bound to the Vue prototype
    Vue.prototype.$Messages                     = Vue.$_Messages
    Vue.prototype.$Regex                        = Vue.$_Regex
    Vue.prototype.$Test                         = Vue.$_Test
    Vue.prototype.$Stream                       = Vue.$_Stream

}

Vue.use(_Defaults)