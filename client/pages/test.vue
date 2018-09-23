<template>
	<div>
		<input type="text" v-model="message" />
		<button id="test" @click="emitEvent">Emit</button>
		<button @click="notification">Notification with emit</button>
		<div>{{ response }}</div>
		<div>{{ errorMessage }}</div>
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
				items: []

			}

		},

		created: function() {

			Vue.app.on('info', (message) => console.log(message))

		},

		mounted: function() {

			Vue.app.on('error', (message) => this.items.push({ message: message }))

		},

		methods: {

			emitEvent: function() {

				Vue.app.emit('hello_world', this.message)
				Vue.Logger('error', 'There was an error.')
				this.error({ message: 'Testing' })

			},

			notification: function() {

				Vue.app.emit('info', 'Here is an info notification emit-event.')
				//Vue.Logger('info', 'Here is an information emit-event.')

			}

		}



	}

</script>