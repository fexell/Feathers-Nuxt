<template>
    <div class="container">
        <h1>Dashboard</h1>

        {{ token }}
    </div>
</template>
<script>

    import Vue from 'vue'

    export default {

        head: {

            title: 'Dashboard'

        },

        data: function() {

            return {

                token: Vue.$Store.state.accessToken

            }

        }

    }

</script>
