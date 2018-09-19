<template>
	<div>
		<button id="test" @click="test">Test</button>
	</div>
</template>
<script>
	
	import Vue from 'vue'

	Vue.app.service('users').on('created', message => console.log(message))

	export default {

		created: function() {

			const feathers = Vue.feathers
			const socketio = Vue.socketio
			const io = Vue.io

			const app = feathers()
			const socket = Vue.io('http://localhost:3030', { path: 'http://localhost', forceNew: false })

			app.configure(socketio(socket))

			app.service('users').on('created', data => console.log(data))

			console.log(socket)

		},

		methods: {

			test: function() {

				console.log(Vue)

			},

		}

	}

</script>