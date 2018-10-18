<template>
	<!-- This is the "Footer Component". -->
	<footer id="Footer" class="comp--wrapper">
		<div class="container">
			<a href="//localhost:3030" target="_blank">API</a>
		</div>
	</footer>
</template>
<script>

	export default {

		name: 'App-Footer'

	}

</script>
<style lang="sass" scoped>
	footer
		&> .container
			text-align: center

			& a
				color: #b3b6b7

				&:hover
					color: #58D68D
</style>