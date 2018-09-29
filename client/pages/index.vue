<template>
	<div class="container">

		<p>{{ isLoggedIn }}</p>
		
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

				currentView: 'Login'

			}

		},

		components: {

			Login,
			Register

		}

	}

</script>