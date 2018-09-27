<template>
  
    <main id="App">

        <header-component/>

        <section id="Content" class="comp--wrapper">
            <keep-alive>
                <nuxt v-update-authentication />
            </keep-alive>
        </section>
        <footer-component/>

    </main>
  
</template>
<script>

    import Vue from 'vue'
    import HeaderComponent from '@/components/headerComponent'
    import FooterComponent from '@/components/footerComponent'

    export default {

        components: {

            HeaderComponent,
            FooterComponent

        },

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

            Vue.app.on('authentication failed', (message) => {

                this.error({ title: 'Error', message: message, type: 'error' })

            })

            Vue.app.on('authentication success', (message) => {

                this.success({ title: 'Success', message: message, type: 'success' })

            })

        }

    }

</script>