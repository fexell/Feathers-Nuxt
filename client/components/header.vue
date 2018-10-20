<template>
	<!-- This is the "Header Component". -->
	<header id="Header" class="comp--wrapper">
		<nav class="container">
			<ul>
				<li><nuxt-link to="/">Home</nuxt-link></li>
				<li><nuxt-link to="/about">About</nuxt-link></li>
				<div class="unset" v-if="Token">
					<li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
					<li><a href="javascript:void(0);" v-logout>Logout</a></li>
				</div>
				<div class="unset" v-else>
					<li><nuxt-link to="/login">Login</nuxt-link></li>
				</div>
			</ul>
		</nav>
	</header>
</template>
<script>

	export default {

		name: 'App-Header'

	}

</script>
