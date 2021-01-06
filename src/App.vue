<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view :year="year"></router-view>
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
    name:'app',
    data(){
        return{
            year:2021
        }
    },
    mounted:function(){
        this.getYear()
    },
    methods:{
        getYear(){
            let y=new Date()
            this.year=y.getFullYear()
        }
    }
}
</script>

<style lang="scss">
html{font-size: 100px;}

@import "./assets/css/base.css";

#app {
  height: 100%;
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: .3rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
