<template>
	<div id="Form">
		<h2>Login</h2>
		<form id="Login" class="form" @submit.prevent="Login(email, password)">
			<div class="form-item">
				<input
				:class="{ valid: emailRegex.test( email ), invalid: !emailRegex.test( email ) }"
				v-model="email"
				type="email"
				name="email"
				placeholder="Email"
				required />
			</div>
			<div class="form-item">
				<input
				:class="{ valid: passwordRegex.test( password ), invalid: !passwordRegex.test( password ) }"
				v-model="password"
				type="password"
				name="password"
				placeholder="Password"
				required />
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
	import Vuex from 'vuex'

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