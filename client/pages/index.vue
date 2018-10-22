<template>
	<div class="container">

		<h1 class="align-center">Welcome to this web application!</h1>

		<div v-if="Token">
			<p>
				<b>Your UserId:</b> {{ UserId }}
			</p>
			<p>
				<b>Your username:</b> {{ Username }}
			</p>
		</div>

	</div>
</template>
<script>

	import Vue from 'vue'

	export default {

		

	}

</script>