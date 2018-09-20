<template>
	<div>
		<button id="test" @click="clickButton">Test</button>
	</div>
</template>
<script>
	
	import Vue from 'vue'

	export default {

		sockets: {

			connect: function() {

				console.log('socket connected')

			},

			customEmit: function(val){
	      		console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
		    }

		},

		created: function() {

			this.$options.sockets.customEmit = (data) => {

				console.log(data)

			}

		},

		mounted: function() {

			console.log(this.$socket)

			this.$options.sockets.customEmit = (data) => console.log(data)
			this.$socket.on('customEmit', data => console.log(data))
			this.$socket.on('emit_method', data => console.log(data))

		},

		methods: {

			clickButton: function(val){
		        // $socket is socket.io-client instance
		        this.$socket.emit('customEmit', val);
		    }

		}

	}

</script>