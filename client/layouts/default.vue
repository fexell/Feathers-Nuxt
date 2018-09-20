<template>
  
    <main id="App">

        <header-component/>

        <section id="Content" class="comp--wrapper">
            <keep-alive>
                <nuxt/>
            </keep-alive>
        </section>

        <footer-component/>

        <keep-alive>
            <error-component/>
        </keep-alive>

    </main>
  
</template>
<script>

    import Vue from 'vue'
    import HeaderComponent from '@/components/headerComponent'
    import FooterComponent from '@/components/footerComponent'
    import ErrorComponent from '@/components/errorComponent'

    export default {

        components: {

            HeaderComponent,
            FooterComponent,
            ErrorComponent

        },

        mounted: function() {

            

        }

    }

</script>