<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <h1>What is going on?</h1>
  <button @click="fetchJokes">Main button</button>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      fetch: ''
    }
  },
  methods: {

    async fetchJokes() {
  try {
    const response = await fetch('https://dummyjson.com/products/1');
    const jokes = await response.json();
    console.log(jokes)
  } catch (error) {
    console.error(error);
  }
}
       
    },
    mounted(){
      console.log('Mounted alert')
      

  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
