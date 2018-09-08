<template>
  <div>
    <h1>Welcome</h1>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <p>Hello from {{ name }}</p>
  </div>
</template>

<script>

  export default {
    
    asyncData({ req }) {
      
      return {
        
        name: req ? 'server' : 'client'
        
      }
      
    }
    
  }

</script>