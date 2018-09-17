<template>
	<!-- This is the "Header Component". -->
	<header id="Header" class="comp--wrapper">
		<div class="container">
			<ul class="Menu">
				<li class="Item">
					<nuxt-link to="/">Home</nuxt-link>
				</li>
				<li class="Item" v-for="item in items">
					<nuxt-link v-bind:to="item.toLowerCase()">{{ item }}</nuxt-link>
				</li>
			</ul>
		</div>
	</header>
</template>
<script>

	export default {
		// The name of the component
		name: 'HeaderComponent',
		data: function() {

			return {
				// An easier way to add menu items
				items: ['About']

			}

		}

	}

</script>