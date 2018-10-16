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

        // Send vuex the localStorage "feathers-jwt"
        beforeMount: function() {

            const accessToken = localStorage.getItem('feathers-jwt')

            if( accessToken ) this.$store.commit('accessToken', accessToken)

        }

    }

</script>