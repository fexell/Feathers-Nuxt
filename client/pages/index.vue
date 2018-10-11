<template>
	<div class="container">

		<div id="IsLoggedOut" v-show="!accessToken">
			<h1 class="center">Welcome, please log in or register.</h1>
		</div>
		<div id="IsLoggedIn" v-show="accessToken">
			<h1 class="center">Welcome, you are now logged in!</h1>
			<p class="center">
				<b>Username:</b><span> {{ Username }}</span>
			</p>
			<form v-form:find.username>
				<input
				v-model="username"
				type="text"
				/>
				<button type="submit">Submit</button>
			</form>
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

				username: '',
				currentView: 'Login',
				validation: function() {

					return {

						username: /(\w+){3,}/i.test( this.username )

					}

				}

			}

		},

		components: {

			Login,
			Register

		}

	}

</script>
