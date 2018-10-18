<template>

    <main id="App">
        <div class="container">

            <app-header/>

            <app-sidebar/>

            <section id="Content" class="comp--wrapper">
                <nuxt />
            </section>

            <app-footer/>

        </div>
    </main>

</template>
<script>

	import Vue from 'vue'
    import Vuex from 'vuex'

    import AppHeader from '@/components/header'
    import AppFooter from '@/components/footer'
    import AppSidebar from '@/components/sidebar'

    import * as Cookies from 'js-cookie'

	Vue.use(Vuex)

    export default {

        components: {

            AppHeader,
            AppFooter,
            AppSidebar

        },
        
        layout: 'default',

        // Initialize the vuex store storage
		beforeCreate: function() {

            this.$store.commit('INIT_STORE')

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

            console.log( process )

        }

    }

</script>
