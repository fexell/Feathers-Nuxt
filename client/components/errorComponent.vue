<template>
	<transition name="error">
		<div class="error" v-if="items.length" v-for="item in items" :class="item.type">
			<div class="icon--type" :class="item.type">
				<button class="icon--button"><i></i></button>
			</div>
			<div class="icon--close">
				<button class="icon--button"><i></i></button>
			</div>
			<div class="message">
				{{ item.message }}
			</div>
		</div>
	</transition>
</template>
<script>
	
	import Vue from 'vue'

	export default {

		data: function() {

			return {

				items: []

			}

		}

	}

</script>