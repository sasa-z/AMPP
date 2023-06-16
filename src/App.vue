<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <h1>What is going on?</h1>
  <button @click="fetchJokes">Main button</button>
  <button @click="fetchAzure">Azure fetch</button>
  <router-view/>
  <ul>
    <li v-for="item in fetch" :key="item">
    {{ item.brand }} -  {{ item.category }} -  {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      fetch: []
    }
  },
  methods: {

    async fetchJokes() {
  try {
    const response = await fetch('https://dummyjson.com/products/');
    const jokes = await response.json();
    console.log(jokes)
    this.fetch = jokes
  } catch (error) {
    console.error(error);
  }
},
async fetchAzure() {
  try {
    const response = await fetch('https://github.com/sasa-z/AMPP-API/tree/main/ListUsers');
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
