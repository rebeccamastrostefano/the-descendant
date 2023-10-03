<script>
// import { RouterView, RouterLink } from 'vue-router';
import Nav from './components/Nav.vue';
import Foot from './components/Foot.vue';

export default{
  components:{
    Nav,
    Foot,
  }
}
</script>

<template>
  <Nav/>
  <Foot/>
</template>

<style>
h1,h2,h3,h4,span{
  font-family: 'Cinzel Decorative', cursive;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Poppins', sans-serif;
  background-color: rgb(29, 24, 18);
  /* padding-top:120px; */
}
</style>
