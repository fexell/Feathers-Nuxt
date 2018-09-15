<template>
	<div>
		<form v-login:test>
			<input v-model="email" type="email" name="email" placeholder="Email" />
			<input v-model="password" type="password" name="password" placeholder="Password" />
			<button type="submit" name="submit">Login</button>
		</form>
	</div>
</template>
<script>
	
	export default {
		// This sets the title of the page. To change its template, please see "nuxt.config.js".
		head: {
			title: 'Home'
		},

		data: () => {

			return {

				email: null,
				password: null

			}

		}

	}

</script>