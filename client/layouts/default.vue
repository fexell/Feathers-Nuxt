<template>
  
    <main id="App">

        <header-component/>

        <section id="Content" class="comp--wrapper">
            <keep-alive>
                <nuxt/>
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

        mounted: function() {

            

        }

    }

</script>