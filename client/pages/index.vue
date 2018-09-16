<template>
	<div class="container">
		
		<keep-alive>
			<component :is="currentView"></component>
		</keep-alive>

	</div>
</template>
<script>

	import Login from '@/components/forms/login.vue'
	
	export default {
		// This sets the title of the page. To change its template, please see "nuxt.config.js".
		head: {
			title: 'Home'
		},

		data: () => {

			return {

				currentView: `Login`

			}

		},

		components: {

			Login

		}

	}

</script>