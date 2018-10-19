<template>
	<div id="Form">
		<h4 class="align-center">Login</h4>
		<form id="Login" class="form" @submit.prevent="Login">
			<div class="form-item">
				<input
				:class="{ invalid: $v.email.$error, valid: !$v.email.$error && email.length }"
				@input="$v.email.$touch()"
				v-model.trim="email"
				type="email"
				name="email"
				placeholder="Email"
				required />
				<div class="icon">
					<i class="material-icons">person</i>
				</div>
			</div>
			<div class="form-item">
				<input
				:class="{ invalid: $v.password.$error, valid: !$v.password.$error && password.length }"
				@input="$v.password.$touch()"
				v-model.trim="password"
				type="password"
				name="password"
				min="6"
				max="64"
				placeholder="Password"
				required />
				<div class="icon">
					<i class="material-icons">lock</i>
				</div>
			</div>
			<div class="form-item">
				<button
				id="login"
				type="submit"
				name="btn-login">
					Login
				</button>
				<div class="icon">
					<i class="material-icons">subdirectory_arrow_right</i>
				</div>
			</div>
		</form>
	</div>
</template>
<script>

	import Vue from 'vue'
	import { required, email } from 'vuelidate/lib/validators'

	const password = ( value ) => Vue.$Test.password( value )

	export default {

		name: "Login",

		data: function() {

			return {
				email: '',
				password: '',

			}

		},

		validations: {

			email: {

				required,
				email,

			},

			password: {

				required,
				password,

			}

		},

		methods: {

			Login: function() {

				if( this.$v.$invalid ) return Vue.app.emit('error', 'Something you have provided turned up invalid.')

				this.$store.dispatch('Login', { strategy: 'local', email: this.email, password: this.password })

			}

		}

	}
</script>
