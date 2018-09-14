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

    import HeaderComponent from '@/components/headerComponent'
    import FooterComponent from '@/components/footerComponent'

    export default {

        components: {

            HeaderComponent,
            FooterComponent

        }

    }

</script>