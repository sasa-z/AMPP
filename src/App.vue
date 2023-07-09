<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <h1>Vue form</h1>
  <the-form
  
  />



</template>

<script>
import TheForm from '@/views/TheForm.vue';

export default {
  components: {
    TheForm,
  },
  data() {
    return {
        counterTitle: "Counter Title",
        amount: 0,
        incrementAmount: 1

    }
  },
  methods: {
    incrementNumber () {
      this.amount += this.incrementAmount
    },
    reset(){
      this.amount =  0
    },

    },

    computed: {
      showMessage () {
        if (this.amount > 20 ){
          return "More than 20"
        }else{
          return ""
        }
      }
   
    },

watch: {
  amount(newValue){
    if (newValue > 20){
      alert("Value is greater than 20")
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
