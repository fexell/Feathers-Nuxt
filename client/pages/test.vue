<template>
	<div>
		<input type="text" v-model="message" />
		<button id="test" @click="emitEvent">Emit</button> This triggers the Logger function. Check console and you'll see a mirrored message.
		<div>{{ response }}</div>
		<div>{{ errorMessage }}</div>
		<button @click="error">Error</button>
		<button @click="warn">Warning</button>
		<button @click="info">Information</button>
		<button @click="success">Success</button>
		{{ authenticated }}
	</div>
</template>
<script>
	
	import Vue from 'vue'

	export default {

		data: function() {

			return {

				errorMessage: '',
				message: 'Default',
				response: 'Server has not yet responded.',
				items: [],
				authenticated: false

			}

		},

		mounted: function() {

			Vue.app.on('authentication successful', () => {

            	this.authenticated = true

            })

		},

		methods: {

			emitEvent: function() {

				Vue.Logger('info', this.message)

			},

			error: function() {

				Vue.app.emit('error', 'Well, here is an error notification.')

			},

			warn: function() {

				Vue.app.emit('warn', 'Well, here is a warning notification.')

			},

			info: function() {

				Vue.app.emit('info', 'Well, here is an information notification.')

			},

			success: function() {

				Vue.app.emit('success', 'Well, here is a success message.')

			}

		}



	}

</script>