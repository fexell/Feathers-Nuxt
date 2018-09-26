<template>
	<div class="container" v-if="!authenticated">

		<keep-alive>
			<component :is="currentView"></component>
		</keep-alive>
		<a href="#" v-on:click="currentView = 'Register'" v-if="currentView == 'Login'">Register</a>
		<a href="#" v-on:click="currentView = 'Login'" v-else>Login</a>

	</div>
	<div class="container" v-else>

		<h1>You are logged in. Yay!</h1>

	</div>
</template>
<script>
	
	import Vue from 'vue'

	import Login from '@/components/forms/login.vue'
	import Register from '@/components/forms/register.vue'
	
	export default {
		// This sets the title of the page. To change its template, please see "nuxt.config.js".

		title: 'Home',
		data: function() {

			return {

				authenticated: false,
				currentView: 'Login'

			}

		},

		watch: {

			authenticated: function() {



			}

		},

		mounted: function() {

			Vue.app.on('authentication successful', () => {

            	this.authenticated = true

            })

		},

		components: {

			Login,
			Register

		}

	}

</script>