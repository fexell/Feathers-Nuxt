<template>
	<div id="Form">
		<h2>Login</h2>
		<form id="Login" class="form" v-login.email.password>
			<div class="form-item">
				<input
				v-validate:email
				v-model="email"
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
				v-validate:password
				v-model="password"
				type="password"
				name="password"
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
	import Vuex from 'vuex'

	export default {

		name: 'Login',

		data: function() {

			return {

				email: '',
				password: '',
				validate: () => {

					return {

						email: Vue.$_Test.email( this.email ),
						password: Vue.$_Test.password( this.password )

					}

				}

			}

		},

		mounted: function() {



		}

	}

</script>
