<template>

    <main id="App">
        <div class="container">

            <app-header/>

            <app-sidebar/>

            <section id="Content" class="comp--wrapper">
                <nuxt/>
            </section>

            <app-footer/>

            <!-- lsc = localStorageChange. This checks if the localStorage changes, and if it does, logout the user. -->
            <iframe style="position:absolute;top:-9999px;left:-9999px;width:0px;height:0px;display:none;" src="./lsc.html"></iframe>

        </div>
    </main>

</template>
<script>

	import Vue from 'vue'

    import AppHeader from '@/components/header'
    import AppFooter from '@/components/footer'
    import AppSidebar from '@/components/sidebar'

    import * as Cookies from 'js-cookie'

    export default {

        components: {

            AppHeader,
            AppFooter,
            AppSidebar

        },
        
        layout: 'default',

        // Initialize the vuex store storage
		beforeCreate: function() {

            this.$store.dispatch('Init')

		},

        // Listen to all errors, warnings, info and success events.
        created: function() {

            Vue.app.on('error', (message) => {

                this.error({ title: 'Error', message: message, type: 'error' })

            })

            Vue.app.on('warn', (message) => {

                this.warn({ title: 'Warning', message: message, type: 'warn' })

            })

            Vue.app.on('info', (message) => {

                this.info({ title: 'Info', message: message, type: 'info' })

            })

            Vue.app.on('success', (message) => {

                this.success({ title: 'Success', message: message, type: 'success' })

            })

        },

        mounted: function() {

            // Provide the iFrame window object with our Vue and $nuxt object.
            document.querySelector('iframe').contentWindow.Vue = Vue
            document.querySelector('iframe').contentWindow.$nuxt = $nuxt

        }

    }

</script>
