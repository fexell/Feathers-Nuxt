<template>
	<div id="Form">
		<h2>Register</h2>
		<form id="Register" class="form" v-register>
			<div class="form-item">
				<input
				v-model="email"
				type="email"
				name="email"
				placeholder="Email"
				required />
			</div>
			<div class="form-item">
				<input
				v-model="password"
				type="password"
				name="password"
				min="6"
				max="64"
				placeholder="Password"
				 />
			</div>
			<div class="form-item">
				<input
				v-model="confirm"
				v-bind:data-password="password"
				type="password"
				name="confirm-password"
				min="6"
				max="64"
				placeholder="Confirm password"
				 />
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
				confirm: ''

			}

		},

		watch: {

			confirmPassword: function( val, oldVal ) {

				

			}

		}

	}

</script>