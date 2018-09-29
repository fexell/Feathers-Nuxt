<template>
	<!-- This is the "Header Component". -->
	<header id="Header" class="comp--wrapper">
		<div class="container">
			<ul class="Menu">
				<li class="Item">
					<nuxt-link to="/">Home</nuxt-link>
				</li>
				<li class="Item" v-for="(item, key) in items" v-bind:key="key">
					<nuxt-link v-bind:to="item.toLowerCase()">{{ item }}</nuxt-link>
				</li>
				<!-- Logged Out container -->
				<!-- Show only if logged out -->
				<div id="Logged--Out" v-show="!isLoggedIn">
					<div class="Forms">
						<transition name="fade" mode="out-in">
							<component :is="currentView" class="fade"></component> <!-- Dynamic component -->
						</transition>
						<div class="Actions">
							<li class="Item" v-if="currentView === 'Register'">
								<a href="#" v-on:click="currentView = 'Login'">Login</a>
							</li>
							<li class="Item" v-else>
								<a href="#" v-on:click="currentView = 'Register'">Register</a>
							</li>
						</div>
					</div>
				</div>
				<!-- Logged in container -->
				<!-- Show only if logged in -->
				<div id="Logged--In" v-show="isLoggedIn">
					<div class="Auth-items">
						<li class="Item">
							<a href="#" v-on:click="Logout">Logout</a>
						</li>
					</div>
				</div>
			</ul>
		</div>
	</header>
</template>
<script>

	import Vue from 'vue'

	import Login from '@/components/forms/login.vue'
	import Register from '@/components/forms/register.vue'

	export default {
		// The name of the component
		name: 'HeaderComponent',

		components: {

			Login,
			Register

		},

		data: function() {

			return {
				// An easier way to add menu items
				items: ['About'],
				currentView: 'Login'

			}

		}

	}

</script>
<style lang="sass" scoped>

	.fade
		transition: all 500ms ease

	.fade-enter,
	.fade-leave
		opacity: 0

</style>