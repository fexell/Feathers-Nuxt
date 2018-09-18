<template>
	<div id="Form">
		<form id="Login" class="form" v-login>
			<div class="form-item">
				<input
				v-model="email"
				type="email"
				name="email"
				placeholder="Email" />
			</div>
			<div class="form-item">
				<input
				v-model="password"
				type="password"
				name="password"
				placeholder="Password" />
			</div>
			<div class="form-item">
				<button
				id="login"
				type="submit"
				name="btn-login">
					Login
				</button>
			</div>
		</form>
	</div>
</template>
<script>
	
	import Vue from 'vue'

	export default {

		name: 'Login',

		data: function() {

			return {

				email: '',
				password: ''

			}

		}

	}

</script>