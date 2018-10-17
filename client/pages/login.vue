<template>
    <div class="container">
        <div id="Logged--Out">
            <div class="Forms">
                <transition name="fade" mode="out-in">
                    <component :is="currentView" class="fade"></component> <!-- Dynamic component -->
                </transition>
                <div class="Actions">
                    <ul>
                        <li class="Item" v-if="currentView === 'Register'">
                            <a href="#" v-on:click="currentView = 'Login'"><i class="material-icons">lock_open</i></a>
                        </li>
                        <li class="Item" v-else>
                            <a href="#" v-on:click="currentView = 'Register'"><i class="material-icons">person_add</i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import Vue from 'vue'

    import Login from "@/components/forms/login.vue";
    import Register from "@/components/forms/register.vue";

    export default {

		middleware: ['authenticated'],

        head: {

            title: 'Login'

        },

        components: {

            Login,
            Register

        },

        data: function() {

            return {

                currentView: 'login'

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

	.fade-enter
		transform: translateX(-100%)

</style>
