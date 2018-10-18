<template>
	<div id="Form">
		<h4>Register</h4>
		<form id="Register" class="form" v-form:signup.username.email.password.confirm>
			<div class="form-item">
				<input
				v-model="username"
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
				v-model="email"
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
				v-model="password"
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
				v-model="confirm"
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

	export default {
		middleware: 'authenticated',
		name: 'Register',
		
		data: function() {

			return {

				username: '',
				email: '',
				password: '',
				confirm: '',
				validation: function() {

					return {

						username: Vue.$Test.username( this.username ),
						email: Vue.$Test.email( this.email ),
						password: Vue.$Test.password( this.password ),
						confirm: Vue.$Test.password( this.confirm ) && this.password === this.confirm

					}

				}

			}

		}

	}

</script>
