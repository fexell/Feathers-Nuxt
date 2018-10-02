<template>
	<div id="Form">
		<h2>Register</h2>
		<form id="Register" class="form" v-register>
			<div class="form-item">
				<input
				:class="{ valid: regex.username.test( username ), invalid: !regex.username.test( username ) }"
				v-model="username"
				type="text"
				name="username"
				placeholder="Username"
				required />
			</div>
			<div class="form-item">
				<input
				:class="{ valid: regex.email.test( email ), invalid: !regex.email.test( email ) }"
				v-model="email"
				type="email"
				name="email"
				placeholder="Email"
				required />
			</div>
			<div class="form-item">
				<input
				:class="{ valid: regex.password.test( password ), invalid: !regex.password.test( password ) }"
				v-model="password"
				type="password"
				name="password"
				min="6"
				max="64"
				placeholder="Password"
				required />
			</div>
			<div class="form-item">
				<input
				:class="{ valid: password === confirm && password.length >= 6, invalid: password !== confirm && password.length >= 6 }"
				v-model="confirm"
				v-bind:data-password="password"
				type="password"
				name="confirm-password"
				min="6"
				max="64"
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

				username: '',
				email: '',
				password: '',
				confirm: ''

			}

		},

		watch: {

			confirmPassword: function( val, oldVal ) {

				

			}

		}

	}

</script>