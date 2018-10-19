<template>
	<div id="Form">
		<h4 class="align-center">Register</h4>
		<form id="Register" class="form" @submit.prevent="Signup">
			<div class="form-item">
				<input
				:class="{ invalid: $v.username.$error, valid: !$v.username.$error && username.length }"
				@input="$v.username.$touch()"
				v-model.trim="username"
				type="text"
				name="username"
				min="5"
				max="30"
				placeholder="Username"
				required />
				<div class="icon">
					<i class="material-icons">person</i>
				</div>
			</div>
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
					<i class="material-icons">email</i>
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
				<input
				:class="{ invalid: $v.confirm.$error, valid: !$v.confirm.$error && confirm.length }"
				@input="$v.confirm.$touch()"
				v-model.trim="confirm"
				type="password"
				name="confirm"
				min="6"
				max="64"
				placeholder="Confirm password"
				required />
				<div class="icon">
					<i class="material-icons">refresh</i>
				</div>
			</div>
			<div class="form-item">
				<button
				type="submit"
				name="btn-register">Register</button>
				<div class="icon">
					<i class="material-icons">subdirectory_arrow_right</i>
				</div>
			</div>
		</form>
	</div>
</template>
<script>

	import Vue from 'vue'
	import { required, email, sameAs } from 'vuelidate/lib/validators'

	const username = ( value ) => Vue.$Test.username( value )
	const password = ( value ) => Vue.$Test.password( value )

	export default {
		name: 'Register',

		data: function() {

			return {

				username: '',
				email: '',
				password: '',
				confirm: '',

			}

		},

		validations: {

			username: {

				required,
				username

			},

			email: {

				required,
				email

			},

			password: {

				required,
				password

			},

			confirm: {

				required,
				sameAsPassword: sameAs('password')

			},

		},

		methods: {

			Signup: function() {

				if( this.$v.$invalid ) return Vue.app.emit('error', 'Something you have provided turned up invalid.')

				this.$store.dispatch('Signup', { username: this.username, email: this.email, password: this.password })

			}

		}

	}

</script>
