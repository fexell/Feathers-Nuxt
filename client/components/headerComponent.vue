<template>
	<header id="Header">
		<div class="Menu-container">
			<ul class="Menu">
				<li class="Item" v-for="item in items">
					<nuxt-link v-bind:to="item.toLowerCase()">{{ item }}</nuxt-link>
				</li>
			</ul>
		</div>
	</header>
</template>
<script>

	export default {

		name: 'HeaderComponent',
		data: () => {

			return {

				items: ['Home', 'About']

			}

		}

	}

</script>