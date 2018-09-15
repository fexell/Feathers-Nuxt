<template>
  
    <div id="App">

        <header-component/>

        <section id="Content">
            <nuxt/>
        </section>

        <footer-component/>

    </div>
  
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

        beforeMount: async () => {

            if( typeof window.localStorage.getItem('feathers-jwt') !== 'undefined' ) {

                await Vue.authClient()

            }

        }

    }

</script>