<template>
	<!-- This is the "Header Component". -->
	<header id="Header" class="comp--wrapper">
		<nav class="container">
			<ul>
				<li><nuxt-link to="/">Home</nuxt-link></li>
				<li v-show="accessToken"><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
				<li v-show="accessToken"><a href="#" v-logout>Logout</a></li>
				<li v-show="!accessToken"><nuxt-link to="/login">Login</nuxt-link></li>
			</ul>
		</nav>
	</header>
</template>
<script>

	export default {

		name: 'App-Header'

	}

</script>
