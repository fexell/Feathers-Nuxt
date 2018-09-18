<template>
	<div class="container">

		<div>

			<div v-bind:class="{ isLoggedIn: !isLoggedIn }">
				<keep-alive>
					<component :is="currentView"></component>
				</keep-alive>
				<a href="#" v-on:click="currentView = 'Register'">Register</a>
				<a href="#" v-on:click="currentView = 'Login'">Login</a>
			</div>
			<div v-bind:class="{ isLoggedIn: isLoggedIn }">
				
			</div>

			<button type="button" @click="test">Test</button>

		</div>

	</div>
</template>
<script>
	
	import Vue from 'vue'

	import Login from '@/components/forms/login.vue'
	import Register from '@/components/forms/register.vue'

	Vue.app.on('error', message => console.log(message))
	Vue.app.on('connection', connection => console.log(connection))
	Vue.app.on('created', data => console.log(data))
	
	export default {
		// This sets the title of the page. To change its template, please see "nuxt.config.js".
		head: {

			title: 'Home',

		},

		data: function() {

			return {

				currentView: 'Login',
				isLoggedIn: Boolean

			}

		},

		created: function() {

			Vue.app.on('connection', connection => {

				console.log('Hello')
				Vue.app.channel('anonymous').join()
			})

		},

		methods: {

			test: function() {

				Vue._emit('error', 'Hello there')

			}

		},

		components: {

			Login,
			Register

		}

	}

</script>