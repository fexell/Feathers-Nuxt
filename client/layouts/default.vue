<template>

    <main id="App" v-update-authentication>

        <header-component/>

        <section id="Content" class="comp--wrapper">
            <nuxt />
        </section>

        <footer-component/>

    </main>

</template>
<script>

	import Vue from 'vue'
	import Vuex from 'vuex'
    import HeaderComponent from '@/components/headerComponent'
	import FooterComponent from '@/components/footerComponent'
	import * as Cookies from 'js-cookie'

	Vue.use(Vuex)

    export default {

        components: {

            HeaderComponent,
            FooterComponent

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