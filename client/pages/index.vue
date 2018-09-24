<template>
	<div class="container">

		<div>

			<div v-bind:class="{ isLoggedIn: !isLoggedIn }">
				<keep-alive>
					<component :is="currentView"></component>
				</keep-alive>
				<a href="#" v-on:click="currentView = 'Register'" v-if="currentView == 'Login'">Register</a>
				<a href="#" v-on:click="currentView = 'Login'" v-else>Login</a>
			</div>
			<div v-bind:class="{ isLoggedIn: isLoggedIn }">
				
			</div>

		</div>

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

				currentView: 'Login',
				isLoggedIn: Boolean

			}

		},

		components: {

			Login,
			Register

		}

	}

</script>