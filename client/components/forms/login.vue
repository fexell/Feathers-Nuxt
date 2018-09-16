<template>
	<div id="Form">
		<form id="Login" class="form" v-login>
			<div class="form-item">
				<input
				v-model="email"
				type="email"
				name="email"
				placeholder="Email" />
			</div>
			<div class="form-item">
				<input
				v-model="password"
				type="password"
				name="password"
				placeholder="Password" />
			</div>
			<div class="form-item">
				<button
				type="submit"
				name="btn-login">
					Login
				</button>
			</div>
		</form>
	</div>
</template>
<script>
	
	export default {

		name: 'Login',
		data: () => {

			return {

				email: null,
				password: null

			}

		}

	}

</script>