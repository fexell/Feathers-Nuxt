<template>
	<div class="container">

		<div id="IsLoggedOut" v-show="!accessToken">
			<h1>Welcome, please log in or register.</h1>
		</div>
		<div id="IsLoggedIn" v-show="accessToken">
			<h1>Welcome, you are now logged in!</h1>
			<p>
				<b>Username:</b><span>{{ user.username }}</span>
			</p>
		</div>

	</div>
</template>
<script>

	import Vue from 'vue'

	import Login from '@/components/forms/login.vue'
	import Register from '@/components/forms/register.vue'

	export default {
		// This sets the title of the page. To change its template, please see "nuxt.config.js".

		head: {

			title: 'Home'

		},

		data: function() {

			return {

				currentView: 'Login'

			}

		},

		components: {

			Login,
			Register

		}

	}

</script>
