<template>
    <div>
      <img id="logo" src="../assets/cropped-big.png">
      <h1>Bienvenue sur mon réseau social !</h1>
      <h2>Connectez-vous pour accéder au site</h2>
      <Connexion href="MainPage"/>
      <h2>Nouveau ? Inscrivez-vous en cliquant <router-link to="/register">ici</router-link></h2>
    </div>
</template>

<script>
import Connexion from '../components/Connexion/Connexion.vue';
export default {
  components: {
      Connexion
  }
}
</script>
<style scoped>
#logo {
    width: 450px;
    display: flex;
    align-self: center;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 10px;
  }
img {
  margin-top: -10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 10px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
/* On screens that are 992px or less */
@media screen and (max-width: 992px) {
  div {
    display: flex;
    flex-direction: column;
  }
  #nav {
    padding: 10px;
  }
}
/* On screens that are 600px or less */
@media screen and (max-width: 600px) {
  div {
    display: flex;
    flex-direction: column;
  }
}
</style>