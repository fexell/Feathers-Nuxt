<template>
    <div class="container">
        <h1>Dashboard</h1>

        {{ Token }}
    </div>
</template>
<script>

    import Vue from 'vue'

    export default {

        middleware: 'notAuthenticated',

        head: {

            title: 'Dashboard'

        },

        data: function() {

            return {



            }

        },

    }

</script>
