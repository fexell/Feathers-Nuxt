<template>
	<!-- This is the "Footer Component". -->
	<footer id="Footer" class="comp--wrapper">
		<div class="container">
			<a class="font-weight-600" href="//localhost:3030" target="_blank"><i class="material-icons">important_devices</i> API</a>
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
				letter-spacing: 2px
				color: #b3b6b7

				&:hover
					color: #58D68D
</style>
