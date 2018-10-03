<template>
	<div id="Form">
		<h2>Register</h2>
		<!--
			:class="{ valid: validation.username( username ), invalid: !validation.username( username ) }"
			:class="{ valid: validation.email( email ), invalid: !validation.email( email ) }"
		-->
		<form id="Register" class="form" v-register.username.email.password>
			<div class="form-item">
				<input
				v-validate:username
				v-model="username"
				type="text"
				name="username"
				min="5"
				max="30"
				placeholder="Username"
				required />
			</div>
			<div class="form-item">
				<input
				v-validate:email
				v-model="email"
				type="email"
				name="email"
				placeholder="Email"
				required />
			</div>
			<div class="form-item">
				<input
				v-validate:password
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
				v-validate:target.password
				v-model="confirm"
				type="password"
				name="confirm"
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
		{{ validate.confirm }}
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
				confirm: '',
				validate: {

					username: Vue.$_Regex.username,
					email: Vue.$_Regex.email,
					password: Vue.$_Regex.password

				}

			}

		},

		watch: {

			confirmPassword: function( val, oldVal ) {



			}

		}

	}

</script>
