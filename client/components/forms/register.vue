<template>
	<div id="Form">
		<form id="Register" class="form">
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
				<input
				v-model="confirmPassword"
				type="password"
				name="confirm-password"
				placeholder="Confirm password" />
			</div>
			<div class="form-item">
				<button
				type="submit"
				name="btn-register">Register</button>
			</div>
		</form>
	</div>
</template>
<script>
	
	import Vue from 'vue'

	export default {

		name: 'Register',
		data: function() {

			return {

				email: '',
				password: '',
				confirmPassword: ''

			}

		}

	}

</script>