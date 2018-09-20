<template>
	<div>
		<input type="text" v-model="message" />
		<button id="test" @click="emitEvent">Emit</button>
		<div>{{ response }}</div>
		<div>{{ errorMessage }}</div>
		<div v-for="item in items">
			{{ item.message }}
		</div>
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

			Vue.app.on('hello_world', (data) => console.log(data))

		},

		mounted: function() {

			Vue.app.on('error', (message) => this.items.push({ message: message }))
			// Vue.Logger('error', 'Testing')

		},

		methods: {

			emitEvent: function() {

				Vue.app.emit('hello_world', this.message)
				Vue.Logger('error', 'There was an error.')

			}

		},



	}

</script>