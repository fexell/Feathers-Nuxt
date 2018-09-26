<template>
	<div id="Form">
		<form id="Register" class="form" v-register>
			<div class="form-item">
				<input
				v-validate-email
				v-model="email"
				type="email"
				name="email"
				pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
				placeholder="Email"
				required />
			</div>
			<div class="form-item">
				<input
				v-validate-password
				v-model="password"
				type="password"
				name="password"
				min="6"
				max="64"
				pattern="/(\S(?<=)){6,64}(?<![^\0-~]|[\127])/i"
				placeholder="Password"
				required />
			</div>
			<div class="form-item">
				<input
				v-model="confirmPassword"
				type="password"
				name="confirm-password"
				min="6"
				max="64"
				pattern="/(\S(?<=)){6,64}(?<![^\0-~]|[\127])/i"
				placeholder="Confirm password"
				required />
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