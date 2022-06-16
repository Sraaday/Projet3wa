<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <RouterView />
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

#app {
  background-color: rgba(165, 210, 255, .4);
  background-image:
    linear-gradient(90deg, rgba(165, 210, 255, .3) 50%, transparent 50%),
    linear-gradient(rgba(165, 210, 255, .3) 50%, transparent 50%);
  background-size: 40px 40px;
}

:root {
  background-color: rgba(165, 210, 255, .4);
  background-image:
    linear-gradient(90deg, rgba(165, 210, 255, .3) 50%, transparent 50%),
    linear-gradient(rgba(165, 210, 255, .3) 50%, transparent 50%);
  background-size: 40px 40px;
}

</style>
