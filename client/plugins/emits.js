import Vue from 'vue'

const _Emits = {

	install( Vue, options ) {

		Vue._emit = async (type, message) => {

			Vue.app.emit(type, message)

		}

	}

}

Vue.use(_Emits)