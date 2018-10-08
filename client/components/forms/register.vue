<template>
	<div id="Form">
		<h4>Register</h4>
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
				<div class="icon">
					<i class="material-icons">person</i>
				</div>
			</div>
			<div class="form-item">
				<input
				v-validate:email
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
				v-validate:password
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
				v-validate:target.password
				v-model="confirm"
				type="password"
				name="confirm"
				min="6"
				max="64"
				placeholder="Confirm password"
				required />
				<div class="icon">
					<i class="material-icons">lock</i>
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

		name: 'Register',
		
		data: function() {

			return {

				username: '',
				email: '',
				password: '',
				confirm: '',
				validate: function() {

					return {

						username: Vue.$_Test.username( this.username ),
						email: Vue.$_Test.email( this.email ),
						password: Vue.$_Test.password( this.password ),
						confirm: Vue.$_Test.password( this.confirm ) && this.password === this.confirm

					}

				}

			}

		}

	}

</script>
