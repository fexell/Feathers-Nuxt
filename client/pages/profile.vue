<template>
    <div class="container" v-protected>
        <h1 class="center">Your profile, {{ Username }}</h1>
        <div class="center">
            <table class="center">
                <tr>
                    <th>User ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Access token</th>
                </tr>
                <tr>
                    <td>{{ UserId }}</td>
                    <td>{{ Username }}</td>
                    <td>{{ Email }}</td>
                    <td>{{ accessToken }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>

    import Vue from 'vue'

    export default {

        

    }

</script>
<style lang="sass" scoped>
    table
        &> tr
            display: grid
            grid-gap: 10px
            grid-template-columns: 1fr 1fr 1fr 1fr

            &> th,
            &> td
                user-select: all

                box-shadow: 0 5px 5px -5px #111

            &> th
                margin-bottom: 5px
                background-color: #F3F3F3

                box-shadow: 0 5px 0 lighten(#F3F3F3, 20%)

            &> td
                position: relative
                overflow: hidden
                height: 50px
                padding: 15px
                color: #111
                background-color: #F3F3F3

                transition: height 500ms

            &> td:hover
                height: 100%
</style>